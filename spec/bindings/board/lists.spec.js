const Lists = require("../../../src/bindings/board/lists").builder;

class MutationObserver { };


describe("Lists", () => {

    describe("invalid construction", () => {
        let document = {};
        let constants = {};
        let reference = {};

        it("should throw an error when no Document is supplied", () => {
            expect(() => Lists({ constants: {} })).toThrow(new Error("Document not supplied!"))
        })


        it("should throw an error when no Constants are supplied", () => {
            expect(() => Lists({ document: {} })).toThrow(new Error("Constants not supplied!"))

        })

    })

    describe("valid", () => {
        let mockNode = { appendChild: node => { } }
        let mockDomListReference = { querySelector: query => mockNode }
        let mockDomListReferences = [mockDomListReference, mockDomListReference];
        let mockConstants = { list: { LIST_CLASS: "a-class" } }
        let mockDocument = {
            getElementsByClassName: name => mockDomListReferences,
            createTextNode: type => mockNode,
            createElement: node => mockNode
        }
        let list = Lists({ document: mockDocument, constants: mockConstants });

        it("construction should produce a immutable object", () => {
            list.test = 100;
            list.getTitle = "";

            expect(list.test).toBeUndefined();
            expect(list.getTitle).not.toBe("");
        })

        describe("getLists should return a array of lists", () => {
            expect(list.getLists().length).toBe(mockDomListReferences.length);
        })
    })
})
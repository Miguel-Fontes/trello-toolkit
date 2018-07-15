const Lists = require("../../../src/bindings/board/lists").builder;
const mocks = require("../../helpers/mocks.js").default

describe("Lists", () => {

    describe("invalid state", () => {
        it("should throw an error when no Document is supplied", () => {
            expect(() => Lists({ constants: {}, mutationObserver: {} })).toThrow(new Error("Document not supplied!"))
        })

        it("should throw an error when no MutationObserver is supplied", () => {
            expect(() => Lists({ document: {}, constants: {} })).toThrow(new Error("Mutation Observer not supplied!"))
        })

        it("should throw an error when no Constants are supplied", () => {
            expect(() => Lists({ document: {}, mutationObserver: {} })).toThrow(new Error("Constants not supplied!"))
        })
    })

    describe("valid state", () => {
        let mockConstants = { list: { LIST_CLASS: "a-class" } }

        let lists = Lists({ document: mocks.dom.document, constants: mockConstants, mutationObserver: mocks.dom.mutationObserver });

        it("construction should produce a immutable object", () => {
            lists.test = 100;
            lists.getTitle = "";

            expect(lists.test).toBeUndefined();
            expect(lists.getTitle).not.toBe("");
        })

        it("getLists should return a array of lists", () => {
            expect(lists.getLists().length).toBe(mocks.dom.listOfNodes.length);
        })
    })
})
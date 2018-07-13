const Card = require("../../../src/bindings/board/card").builder;

describe("Card", () => {

    describe("construction", () => {
        let document = {};
        let constants = {};
        let reference = {};

        describe("invalid", () => {

            it("should throw an error when no Document is supplied", () => {
                expect(() => Card({ constants: {}, card: {} })).toThrow(new Error("Document not supplied!"))
            })


            it("should throw an error when no Constants are supplied", () => {
                expect(() => Card({ document: {}, card: {} })).toThrow(new Error("Constants not supplied!"))

            })

            it("should throw an error when no Card DOM reference is supplied", () => {
                expect(() => Card({ document: {}, constants: {} })).toThrow(new Error("Card Reference not supplied!"))
            })
        })

        describe("valid", () => {
            it("should produce a immutable object", () => {
                let card = Card({ document: {}, constants: {}, card: {} });
                card.test = 100;
                card.getTitle = "";
                expect(card.test).toBeUndefined();
                expect(card.getTitle).not.toBe("");
            })
        })

        describe("operations", () => {
            let card = Card({ document: {}, constants: {}, card: {} });

            it("should return card title", () => {
                expect(card.getTitle()).toBe("");
            })
        })
    })
})
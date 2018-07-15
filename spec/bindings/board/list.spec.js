const List = require("../../../src/bindings/board/list").builder;
const mocks = require("../../helpers/mocks.js").default
describe("List", () => {

    describe("on invalid state", () => {
        it("should throw an error when no Document is supplied", () => {
            expect(() => List({ constants: {}, mutationObserver: {} })).toThrow(new Error("Document not supplied!"))
        })

        it("should throw an error when no MutationObserver is supplied", () => {
            expect(() => List({ document: {}, constants: {} })).toThrow(new Error("Mutation Observer not supplied!"))
        })

        it("should throw an error when no Constants are supplied", () => {
            expect(() => List({ document: {}, mutationObserver: {} })).toThrow(new Error("Constants not supplied!"))
        })

        it("should throw an error when no List reference is supplied", () => {
            expect(() => List({ document: {}, mutationObserver: {}, constants: {} })).toThrow(new Error("List not supplied!"))
        })
    })

    describe("on valid state", () => {
        let mockConstants = { list: { LIST_CLASS: "a-class" } }

        let mockCard = mocks.dom.node;
        mockCard.attributes = {
            class: {
                nodeValue: "list-card"
            }
        }

        let mockListOfCards = mocks.dom.node;
        mockListOfCards.childNodes = [mockCard, mockCard]

        let list = List({
            document: mocks.dom.document,
            constants: mockConstants,
            mutationObserver: mocks.dom.mutationObserver,
            list: mockListOfCards
        });

        it("should build a valid list", () => {
            expect(list).toBeDefined();
            expect(list.getHeader).toBeDefined();
            expect(list.getCounter).toBeDefined();
            expect(list.getCards).toBeDefined();
            expect(list.getNumberOfCards).toBeDefined();
        })

        it('should return a Header reference', () => {
            expect(list.getHeader()).toBeDefined();
        });

        it('should return a Counter component reference', () => {
            expect(list.getCounter()).toBeDefined();
        });

        it('should return a Cards reference list', () => {
            expect(list.getCards()).toBeDefined();
        });

        it('should return the number of cards', () => {
            expect(list.getNumberOfCards()).toEqual(mockListOfCards.childNodes.length);
        });

        it('should update counter when a new card is added', () => {
            let mutation = mocks.dom.mutation({ addedNodes: [mocks.dom.node] });

            mockListOfCards.childNodes.push(mocks.dom.node);
            mocks.dom.mutationObserverInstance.mutate([mutation]);

            expect(list.getNumberOfCards()).toEqual(mockListOfCards.childNodes.length);
        })

        it('should update counter when a new card is removed', () => {
            let mutation = mocks.dom.mutation({ removedNodes: [mocks.dom.node] });

            mockListOfCards.childNodes.push(mocks.dom.node);
            mocks.dom.mutationObserverInstance.mutate([mutation]);

            expect(list.getNumberOfCards()).toEqual(mockListOfCards.childNodes.length);
        })
    })
})
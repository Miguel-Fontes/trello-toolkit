const List = require('../../../src/core/board/list.js').default;

describe("List invalid construction", () => {
  it("should throw list name not informed error", () => {
    expect(() => List({})).toThrow(new Error("List name not informed!"))
  });
});

describe("List valid construction", () => {
  let mockListParams = { name: "a list", cards: ["1", "2", "3"] };

  it("should build a valid list", () => {
    expect(List(mockListParams)).toBeDefined();
  })

  it("should return the cards count", () => {
    expect(List(mockListParams).getCardsCount()).toBe(mockListParams.cards.length);
  })
})
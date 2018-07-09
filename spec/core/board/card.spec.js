const Card = require('../../../src/core/board/card.js').builder;

describe("Card invalid construction", () => {
  it("should throw card title not informed error", () => {
    expect(() => Card({})).toThrow(new Error("Card title not informed!"))
  });
});

describe("Card valid construction", () => {
  let mockCardParams = { title: "a card" };

  it("should build a valid Card", () => {
    expect(Card(mockCardParams)).toBeDefined();
  })

  it("should return a card title", () => {
    expect(Card(mockCardParams).getTitle()).toBe(mockCardParams.title);
  })
})
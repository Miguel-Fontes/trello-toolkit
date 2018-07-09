const Optional = require('../../src/util/optional.js').default;

describe("Optional Empty", () => {
  it("should build an Empty Optional", () => {
    let optional = Optional.empty();

    expect(optional).toBeDefined();
    expect(optional.isEmpty()).toBe(true);
  });

  it("should build an Empty from a Undefined", () => {
    let optional = Optional.fromNullable(undefined);

    expect(optional).toBeDefined();
    expect(optional.isEmpty()).toBe(true);
  });
});

describe("Optional With a Value", () => {
  it("should build a optional with a value", () => {
    let value = 5;
    let optional = Optional.of(value);

    expect(optional).toBeDefined();
    expect(optional.isEmpty()).toBe(false);
    expect(optional.orElse(() => 0)).toBe(5)
  });

  it("should build a Optional with a value using fromNullable method", () => {
    let optional = Optional.fromNullable(5);

    expect(optional).toBeDefined();
    expect(optional.isEmpty()).toBe(false);
    expect(optional.orElse(() => 0)).toBe(5)
  });

  it("map should build a new Optional with a new value", () => {
    let optional = Optional.of(5);
    let newOptional = optional.map(x => x + 1);

    expect(optional).toBeDefined();
    expect(optional.isEmpty()).toBe(false);
    expect(optional.orElse(() => 0)).toBe(5)

    expect(newOptional).toBeDefined();
    expect(newOptional.isEmpty()).toBe(false);
    expect(newOptional.orElse(() => 0)).toBe(6)
  })
});
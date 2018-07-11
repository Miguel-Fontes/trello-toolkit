const Optional = require('../../src/util/optional.js').default;

describe("Optional", () => {
  describe("Empty", () => {
    let optional = Optional.empty();

    it("should build an Empty Optional", () => {
      expect(optional).toBeDefined();
      expect(optional.isEmpty()).toBe(true);
    });

    it("map should run without error", () => {
      optional
        .map(x => x + 1)
        .map(x => x * 5)
        .map(x => x / 2)

      expect(optional.isEmpty()).toBe(true);
    })
  });

  describe("With a Value", () => {
    let value = 5;
    let optional = Optional.of(value);

    it("should return false for a isEmpty call", () => {
      expect(optional.isEmpty()).toBe(false);
    })

    it("should return true for a isPresent call", () => {
      expect(optional.isPresent()).toBe(true);
    })

    it("should build a optional with a value", () => {
      expect(optional).toBeDefined();
      expect(optional.orElse(() => 0)).toBe(5)
    });

    it("map should build a new Optional with a new value", () => {
      let newOptional = optional.map(x => x + 1);

      expect(optional).toBeDefined();
      expect(optional.isEmpty()).toBe(false);
      expect(optional.orElse(() => 0)).toBe(5)

      expect(newOptional).toBeDefined();
      expect(newOptional.isEmpty()).toBe(false);
      expect(newOptional.orElse(() => 0)).toBe(6)
    })

    it("should execute a function if value is present", () => {
      let optional = Optional.of(5);
      let isPresent = false;

      optional.ifPresent(x => {
        expect(x).toBe(5);
        isPresent = true;
      })

      expect(isPresent).toBeTruthy();
    })
  });

  describe("From Nullable", () => {

    it("should build a Optional with a value using fromNullable method", () => {
      let optional = Optional.fromNullable(5);

      expect(optional).toBeDefined();
      expect(optional.isEmpty()).toBe(false);
      expect(optional.orElse(() => 0)).toBe(5)
    });

    it("should build an Empty from a Undefined", () => {
      let optional = Optional.fromNullable(undefined);

      expect(optional).toBeDefined();
      expect(optional.isEmpty()).toBe(true);
    });
  });
});

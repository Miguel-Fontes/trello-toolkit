const objects = require('../../src/util/objects.js');

describe("Empty Object", () => {
    it("should return true for a Empty Object", () => {
        expect(objects.isEmptyObject({})).toBe(true);
    });
    it("should return false for a not Empty Object", () => {
        expect(objects.isEmptyObject({ key: "value" })).toBe(false);
    });
});
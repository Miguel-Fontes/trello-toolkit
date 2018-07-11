const iterable = require('../../src/util/iterable.js').default;

describe("Iterable with content", () => {
    let mockData = [1, 2, 3, 4, 5];

    it("should map over and double each value", () => {
        let result = iterable({ collection: mockData })
            .map(x => x * 2)
            .collect()

        expect(result).toEqual([2, 4, 6, 8, 10])
    })

    it("should filter data based on a predicate", () => {
        let result = iterable({ collection: mockData })
            .filter(x => x % 2 == 0)
            .collect()

        expect(result).toEqual([2, 4]);
    })

    it("should find a value", () => {
        let result = iterable({collection: mockData})
            .find(x => x == 2)

        expect(result).toEqual(2);
    })

})
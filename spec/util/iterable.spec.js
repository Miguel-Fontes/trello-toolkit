const iterable = require('../../src/util/iterable.js').default;

describe("Iterable with content", () => {
    let mockData = [1, 2, 3, 4, 5];

    it("should map over and double each value", () => {
        let result = iterable({ collection: mockData })
            .map(x => x * 2)
            .get()

        expect(result).toEqual([2, 4, 6, 8, 10])
    })

})
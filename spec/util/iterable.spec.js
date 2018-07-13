const iterable = require('../../src/util/iterable.js').default;

describe("Iterable", () => {

    describe("with content and single list", () => {
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
            let result = iterable({ collection: mockData })
                .find(x => x == 2)

            expect(result).toEqual(2);
        })

        it("should find first value", () => {
            let result = iterable({ collection: mockData })
                .findFirst();

            expect(result.isEmpty()).toBeFalsy();
            expect(result.orElse(null)).toEqual(1);
        })

        it("for each should iterate each value", () => {
            let values = [];
            iterable({ collection: mockData })
                .forEach(x => values.push(x));

            expect(values).toEqual(mockData);
        })
    })

    describe("with two lists", () => {
        let mockData1 = [1, 2, 3, 4, 5];
        let mockData2 = [6, 7, 8, 9, 10];

        it("should map over and double each value", () => {
            let result = iterable({ collections: [mockData1, mockData2] })
                .map(x => x * 2)
                .collect()

            expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
        })

        it("should filter data based on a predicate", () => {
            let result = iterable({ collections: [mockData1, mockData2] })
                .filter(x => x % 2 == 0)
                .collect()

            expect(result).toEqual([2, 4, 6, 8, 10]);
        })

        it("should find a value", () => {
            let result = iterable({ collections: [mockData1, mockData2] })
                .find(x => x == 2)

            expect(result).toEqual(2);
        })

        it("should find first value", () => {
            let result = iterable({ collections: [mockData1, mockData2] })
                .findFirst();

            expect(result.isEmpty()).toBeFalsy();
            expect(result.orElse(null)).toEqual(1);
        })

        it("for each should iterate each value", () => {
            let values = [];
            iterable({ collections: [mockData1, mockData2] })
                .forEach(x => values.push(x));

            expect(values).toEqual(mockData1.concat(mockData2));
        })
    })




})
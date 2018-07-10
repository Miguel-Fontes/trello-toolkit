const Iterable = (spec, my) => {
    let that = {}, collection;
    my = my || {}

    init();

    function init() {
        collection = spec.collection || [];
    }

    // forEach :: (a -> _) -> ()
    that.forEach = function (f) {
        iterate(i => {
            f(collection[i]);
        })
    }

    // map :: (a -> b) -> [a] -> [b]
    that.map = function (f) {
        let mappedData = [];

        iterate(i => {
            mappedData.push(f(collection[i]));
        })

        return Iterable({collection: mappedData});
    }

    that.find = function (predicate) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i]))
                return collection[i];
        }
    }

    function iterate(f) {
        for (let i = 0; i < collection.length; i++) {
            f(i);
        }
    }

    that.get = function () {
        return collection;
    }

    return Object.freeze(that);
}

module.exports = {
    default: Iterable
};
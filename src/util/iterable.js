const optional = require('./optional').default;

const Iterable = (spec, my) => {
    let that = {}, collection;
    my = my || {}

    init();

    function init() {
        collection = spec.collection || [];
    }

    // forEach :: (a -> _) -> ()
    that.forEach = f => {
        iterate(i => {
            f(collection[i]);
        })
    }

    // map :: (a -> b) -> [a] -> [b]
    that.map = f => {
        let mappedData = [];

        iterate(i => {
            mappedData.push(f(collection[i]));
        })

        return Iterable({ collection: mappedData });
    }

    that.filter = predicate => {
        let filteredData = [];

        iterate(i => {
            if (predicate(collection[i]))
                filteredData.push(collection[i])
        })

        return Iterable({ collection: filteredData });
    }

    that.find = predicate => {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i]))
                return collection[i];
        }
    }

    that.collect = function () {
        return collection;
    }

    that.findFirst = () => {
        return collection.length > 0
            ? optional.of(collection[0])
            : optional.empty();
    }

    function iterate(f) {
        for (let i = 0; i < collection.length; i++) {
            f(i);
        }
    }

    return Object.freeze(that);
}

module.exports = {
    default: Iterable
};
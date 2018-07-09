const Iterable = (spec, my) => {
    let that = {}
    my = my || {}

    my.collection = spec.collection;

    // forEach :: (a -> _) -> ()
    that.forEach = function (f) {
        iterate(i => {
            f(my.collection[i]);
        })
    }

    // map :: (a -> b) -> DomList [a] -> DomList [b]
    that.map = function (f) {
        iterate(i => {
            my.collection[i] = f(my.collection[i]);
        })

        return that;
    }

    that.find = function (predicate) {
        for (let i = 0; i < my.collection.length; i++) {
            if (predicate(my.collection[i]))
                return my.collection[i];
        }
    }

    function iterate(f) {
        for (let i = 0; i < my.collection.length; i++) {
            f(i);
        }
    }

    // get :: DomCollection
    that.get = function () {
        return my.collection;
    }

    return that;
}

module.exports = {
    default: Iterable
};
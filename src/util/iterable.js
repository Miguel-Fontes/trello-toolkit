let Iterable = function (spec, my) {
    let that = {}
    my = my || {}

    my.collection = spec.collection;

    // forEach :: (a -> _) -> ()
    that.forEach = function (f) {
        for (let i = 0; i < my.collection.length; i++) {
            f(my.collection[i]);
        }
    }

    // map :: (a -> b) -> DomList [a] -> DomList [b]
    that.map = function (f) {
        for (let i = 0; i < my.collection.length; i++) {
            my.collection[i] = f(my.collection[i]);
        }

        return that;
    }

    that.find = function (predicate) {
        for (let i = 0; i < my.collection.length; i++) {
            if (predicate(my.collection[i]))
                return my.collection[i];
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
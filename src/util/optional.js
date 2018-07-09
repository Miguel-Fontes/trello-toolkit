const objects = require('./objects.js');

const Optional = (spec, my) => {
    let that = {};
    my = my || {};
    spec = spec || {};

    my.of = spec.of || undefined;

    that.of = of;
    that.empty = empty;
    that.fromNullable = fromNullable;


    function of(value) {
        return Container({ of: value })
    }

    function empty() {
        return Container({});
    }

    function fromNullable(nullable) {
        return objects.isNullObject(nullable)
            ? empty()
            : of(nullable);
    }

    return Object.freeze(that);
};

function Container(spec, my) {
    let that = {};
    my = my || {};

    my.of = spec.of || undefined;

    that.isEmpty = isEmpty
    that.map = map
    that.orElse = orElse;

    function isEmpty() {
        return objects.isNullObject(my.of)
    }

    function map(f) {
        return isEmpty()
            ? that
            : Container({ of: f(my.of) })
    }

    function orElse(f) {
        return isEmpty()
            ? f()
            : my.of;
    }

    return Object.freeze(that);
}

module.exports = {
    default: Optional()
}
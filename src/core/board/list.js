const iterable = require('../../util/iterable').default;

const List = (spec, my) => {
    let that = {};
    my = my || {}

    init();

    that.getCardsCount = getCardsCount;
    that.getName = getName;

    function init() {
        if (spec.name == undefined) throw new Error("List name not informed!")

        my.name = spec.name;
        my.cards = spec.cards || [];
    }

    function getCardsCount() {
        return my.cards.length;
    }

    function getName() {
        return my.name;
    }

    return Object.freeze(that);
}

module.exports = {
    builder: List
};

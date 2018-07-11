const Card = (spec, my) => {
    let that = {};
    my = my || {};

    init();

    that.getTitle = getTitle;

    function init() {
        if (spec.title == undefined) throw new Error("Card title not informed!")

        my.title = spec.title;
    }

    function getTitle() {
        return my.title;
    }

    return Object.freeze(that);
}

module.exports = {
    builder: Card
}
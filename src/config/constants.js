const constants = (spec, my) => {
    let that = {};
    my = my || {};

    that.list = {
        LIST_CLASS: "list",
        HEADER_CLASS: "list-header",
        card: {
            CARD_LIST_CLASS: "list-cards"
        }
    }

    return Object.freeze(that);
}

module.exports = {
    default: constants()
};
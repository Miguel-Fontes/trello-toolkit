const constants = (spec, my) => {
    let that = {};
    my = my || {};

    that.list = {
        LIST_CLASS: "list",
        LIST_NAME_CLASS: "list-header-name-assist",
        HEADER_CLASS: "list-header",
        card: {
            CARD_LIST_CLASS: "js-list-cards",
            TITLE_CLASS: "js-card-name"
        }
    }

    return Object.freeze(that);
}

module.exports = {
    default: constants()
};
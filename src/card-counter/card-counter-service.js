const iterable = require("../util/iterable").default;

const Counter = function (spec, my) {

    var that = {}

    const LIST_CLASS =      spec.constants.list.LIST_CLASS;
    const HEADER_CLASS =    spec.constants.list.HEADER_CLASS;
    const CARD_LIST_CLASS = spec.constants.list.card.CARD_LIST_CLASS;

    that.count = setListsCounters;

    function getLists() {
        return document.getElementsByClassName(LIST_CLASS)
    }

    function setListCardNumber(list, counter) {
        let counterNode = document.createElement("p");
        counterNode.appendChild(document.createTextNode(counter));
        getListHeader(list).appendChild(counterNode);
    }

    function getListHeader(list) {
        return iterable({ collection: list.children })
            .find(children => {
                return children.attributes.class.value.includes(HEADER_CLASS);
            })
    }

    function getCardsList(list) {
        return iterable({ collection: list.children })
            .find(children => {
                return (children.attributes.class.value.includes(CARD_LIST_CLASS))
            })
    }

    function getCardListSize(list) {
        return getCardsList(list).childElementCount;
    }

    function setListsCounters() {
        iterable({ collection: getLists() })
            .forEach(item => {
                let size = getCardListSize(item);
                setListCardNumber(item, size)
            })
    }

    return that;
}

module.exports = {
    Build: Counter
}
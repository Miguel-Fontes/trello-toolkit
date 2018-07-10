const iterable = require('../../util/iterable').default

const List = (spec, my) => {
    let that = {}, references = {};
    my = my || {};

    init()

    that.getHeader = () => references.components.header;
    that.getCards = () => references.components.cards;
    that.getCounter = () => references.components.counter;
    that.getNumberOfCards = () => references.components.cards.childElementCount;

    function init() {
        setDocument();
        setConstants();
        setReferences();
    }

    function setDocument() {
        my.document = my.document || spec.document;
        if (my.document == undefined) throw new Error("Document not supplied!")
    }

    function setConstants() {
        my.constants = my.constants || spec.constants
        if (my.constants == undefined) throw new Error("Constants not supplied!")
    }

    function setReferences() {
        if (spec.list == undefined) throw new Error("List not supplied!")

        references.list = spec.list;
        references.components = {};
        references.components.name = bindListNameReference();
        references.components.header = bindHeaderReference();
        references.components.cards = bindCardsReference();
        references.components.counter = bindCardCounterReference();

    }

    function bindHeaderReference() {
        return references.list.querySelector('.js-list-header');
    }

    function bindListNameReference() {
        return references.list.querySelector('.js-list-name-assist');
    }

    function bindCardsReference() {
        return references.list.querySelector('.js-list-cards');
    }

    function bindCardCounterReference() {
        let numberOfCards = references.components.cards.childElementCount;
        let counterNode = my.document.createElement("p");
        counterNode.appendChild(my.document.createTextNode(numberOfCards));
        references.components.header.appendChild(counterNode);

        return counterNode;
    }


    return that;
}

module.exports = {
    builder: List
}
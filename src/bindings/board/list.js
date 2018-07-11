const iterable = require('../../util/iterable').default

const List = (spec, my) => {
    let that = {}, references = {};
    my = my || {};

    init()

    that.getHeader = () => references.components.header;
    that.getCards = () => references.components.cards;
    that.getCounter = () => references.components.counter;
    that.getNumberOfCards = getNumberOfCards;

    function init() {
        setDocument();
        setConstants();
        setReferences();
        dataBindMutations()
    }

    function getNumberOfCards() {
        return iterable({ collection: that.getCards().childNodes })
            .filter(node => isACard(node))
            .collect()
            .length;
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

    function dataBindMutations() {
        subscribeCardListObserver();
    }

    function subscribeCardListObserver() {
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                iterable({ collection: mutation.addedNodes })
                    .filter(node => isACard(node))
                    .findFirst()
                    .ifPresent(node => updateCounterValue());
            });
        });
        observer.observe(references.components.cards, { childList: true });
    }

    function isACard(node) {
        return node.attributes['class'].nodeValue.includes('list-card');
    }

    function updateCounterValue() {
        references.components.counter.innerHTML = that.getNumberOfCards();
    }

    return Object.freeze(that);
}

module.exports = {
    builder: List
}
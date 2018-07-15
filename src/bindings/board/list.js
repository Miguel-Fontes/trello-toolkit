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
        setMutationObserver();
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

    function setMutationObserver() {
        my.mutationObserver = my.mutationObserver || spec.mutationObserver;
        if (my.mutationObserver == undefined) throw new Error("Mutation Observer not supplied!")
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
        counterNode.setAttribute('class', 'ttk-card-counter');
        counterNode.appendChild(my.document.createTextNode(numberOfCards));
        references.components.header.appendChild(counterNode);

        return counterNode;
    }

    function dataBindMutations() {
        subscribeCardListObserver();
    }

    function subscribeCardListObserver() {
        var observer = new my.mutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                iterable({ collections: [mutation.addedNodes, mutation.removedNodes] })
                    .filter(node => isACard(node))
                    .findFirst()
                    .ifPresent(node => updateCounterValue());
            });
        });
        observer.observe(references.components.cards, { childList: true, subtree: true });
    }

    function isACard(node) {
        return node.getAttribute('class').includes('list-card');
    }

    function updateCounterValue() {
        references.components.counter.innerHTML = that.getNumberOfCards();
    }

    return Object.freeze(that);
}

module.exports = {
    builder: List
}
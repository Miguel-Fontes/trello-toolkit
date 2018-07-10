const iterable = require('../util/iterable.js')

const List = (spec, my) => {
    let that = {}, references = {};
    my = my || {};

    init()

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

        references = {
            list: spec.list,
            name: bindListNameReference(),
            header: bindHeaderReference(),
            cards: bindCardsReference()
        }
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

    return that;
}

module.exports = {
    builder: List
}
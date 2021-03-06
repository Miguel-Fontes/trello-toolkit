const iterable = require('../../util/iterable').default
const List = require('./list').builder

const Lists = (spec, my) => {
    let that = {}, references = {};
    my = my || {};

    init();

    that.getLists = () => references.components.lists;

    function init() {
        setDocument();
        setMutationObserver();
        setConstants();
        setReferences();
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
        references.components = {
            lists: bindListsReference(),
        }
    }

    function bindListsReference() {
        return iterable({ collection: getListsCollection() })
            .map(list => { return List({ list: list }, my) })
            .collect();
    }

    function getListsCollection() {
        return my.document.getElementsByClassName(my.constants.list.LIST_CLASS)
    }

    return Object.freeze(that);
}

module.exports = {
    builder: Lists
}
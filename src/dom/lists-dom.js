const ListsDom = (spec, my) =>  {
    let that = {}, references = {};
    my = my || {};

    init();

    that.getLists = () => references.lists;

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
        references = {
            lists: bindListsReference(),
        }
    }

    function bindListsReference() {
        return my.document.getElementsByClassName(my.constants.list.LIST_CLASS)
    }

    return that;

}

module.exports = {
    builder: ListsDom
}
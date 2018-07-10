const Card = (spec, my) => {
    let that = {}, references = {};
    my = my || {};

    init()

    that.getTitle = () => references.title;

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
        if (spec.card == undefined) throw new Error("Card Reference not supplied!")

        references = {
            title: "" // WIP
        };
    }

    return that;
}

module.exports = {
    builder: Card
}
var util = {};
var mocks = {};

// Util
util.id = x => x

// Mocks
// DOM
mocks.dom = {};

mocks.dom.node = nodeBuilder

function nodeBuilder(spec) {
    spec = spec || {};

    return {
        appendChild: node => { },
        querySelector: query => nodeBuilder(),
        childNodes: spec.childNodes || [],
        setAttribute: () => { },
        getAttribute: () => spec.class + 'a class'
    }
}

mocks.dom.listOfNodes = [nodeBuilder(), nodeBuilder()];

mocks.dom.document = {
    getElementsByClassName: name => mocks.dom.listOfNodes,
    createTextNode: type => nodeBuilder(),
    createElement: node => nodeBuilder()
}

mocks.dom.mutationObserver = function (observer) {
    let that = {};
    let my = {};

    init();

    function init() {
        my.observer = observer;
    }

    that.observe = util.id;
    that.mutate = mutations => observer(mutations)

    mocks.dom.mutationObserverInstance = that;

    return that;
};

mocks.dom.mutation = function (spec, my) {
    let that = {};
    my = my || {}

    init();

    function init() {
        that.type = spec.type || "";
        that.target = spec.target || nodeBuilder();
        that.addedNodes = spec.addedNodes || [nodeBuilder()];
        that.removedNodes = spec.removedNodes || [nodeBuilder()];
        that.previousSibling = spec.previousSibling || nodeBuilder();
        that.nextSibling = spec.nextSibling || nodeBuilder();
        that.attributeName = spec.attributeName || "";
        that.attributeNamespace = spec.attributeNamespace || "";
        that.oldValue = spec.oldValue || "";
    }

    return that;
}

module.exports = {
    default: mocks
}
var util = {};
var mocks = {};

// Util
util.id = x => x

// Mocks
// DOM
mocks.dom = {};

mocks.dom.node = {
    appendChild: node => { },
    querySelector: query => mocks.dom.node,
    attributes: {
        class: 'a-class'
    }
}

mocks.dom.listOfNodes = [mocks.dom.node, mocks.dom.node];

mocks.dom.document = {
    getElementsByClassName: name => mocks.dom.listOfNodes,
    createTextNode: type => mocks.dom.node,
    createElement: node => mocks.dom.node
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
        that.target = spec.target || mocks.dom.node;
        that.addedNodes = spec.addedNodes || [mocks.dom.node];
        that.removedNodes = spec.removedNodes || [mocks.dom.node];
        that.previousSibling = spec.previousSibling || mocks.dom.node;
        that.nextSibling = spec.nextSibling || mocks.dom.node;
        that.attributeName = spec.attributeName || "";
        that.attributeNamespace = spec.attributeNamespace || "";
        that.oldValue = spec.oldValue || "";
    }

    return that;
}

module.exports = {
    default: mocks
}
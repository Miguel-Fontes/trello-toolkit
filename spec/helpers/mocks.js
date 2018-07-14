var util = {};
var mocks = {};

// Util
util.id = x => x

// Mocks
// DOM
mocks.dom = {};
mocks.dom.mutationObserver = function () {
    return {
        observe: util.id
    }
};

mocks.dom.node = { appendChild: node => { } }
mocks.dom.listReference = { querySelector: query => mocks.dom.node }
mocks.dom.listReferences = [mocks.dom.listReference, mocks.dom.listReference];
mocks.dom.document = {
    getElementsByClassName: name => mocks.dom.listReferences,
    createTextNode: type => mocks.dom.node,
    createElement: node => mocks.dom.node
}

module.exports = {
    default: mocks
}
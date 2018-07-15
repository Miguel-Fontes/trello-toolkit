const constants = require('./config/constants').default;
const Lists = require('./bindings/board/lists').builder;

let config = {
    constants: constants,
    document: document,
    mutationObserver: MutationObserver
};

let dom = {
    lists: Lists(config)
}
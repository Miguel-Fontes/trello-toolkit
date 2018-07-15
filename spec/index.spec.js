const mocks = require("./helpers/mocks.js").default

describe("application", () => {
    it("should start up correctly", () => {
        global.document = mocks.dom.document;
        global.MutationObserver = mocks.dom.mutationObserver

        require("../src/index");
    })
})


const {URL} = require('url');

class Page {
    constructor(path) {
        this.path = path;
        this.url = new URL(path, browser.config.baseUrl)
    }

    load() {
        browser.url(this.path)
    }
}

module.exports = Page;
import Page from './page'

class AboutPage extends Page {
    constructor(url = './about') {
        super(url);
    }

    load() {
        super.load();
    }

    async verifyAboutUrl() {
        expect(browser.getUrl()).toHaveText('about')
    }
}
module.exports = AboutPage;
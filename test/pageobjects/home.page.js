const Page = require('./page');


class HomePage extends Page {
    constructor(url = './') {
        super(url);
    }

    get $siteHeader() {return $('.header-menu-wrapper')};
    get $siteNav() {return $('nav[aria-label="Global"]')};
    get $siteFooter() {return $('footer.footer')};
    get $searchField() {return $('[data-test-selector="nav-search-input"]')};
    get $jumpToSuggestionBtn() {return $('ul[id="jump-to-results"]')};
    get $globalJumpToSuggestion() {return $('#jump-to-suggestion-search-global')};

    //Footer
    get $aboutButton() {return $('//a[contains(text(),\'About\')]')};


    async waitForLoad() {
        await this.$siteHeader.waitForExist();
        await this.$siteNav.waitForExist();
        await this.$siteFooter.waitForExist();
    }

    async makeASearch(text) {
        await this.$searchField.setValue(text);
        await this.$jumpToSuggestionBtn.waitForDisplayed();
        await this.$globalJumpToSuggestion.click();
    }

    async clickAboutButton() {
        await this.$aboutButton.scrollIntoView();
        await this.$aboutButton.click();
    }

    load() {
        super.load();
    }
}

module.exports = HomePage;

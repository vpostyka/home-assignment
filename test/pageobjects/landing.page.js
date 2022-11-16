import Page from "./page";


class LandingPage extends Page {

    get searchField() {return $('[data-test-selector="nav-search-input"]')};
    get jumpToSuggestionBtn() {return $('ul[id="jump-to-results"]')};
    get globalJumpToSuggestion() {return $('#jump-to-suggestion-search-global')};

    open() {
        return super.load();
    }

    makeASearch(text) {
        this.searchField.setValue(text);
        this.jumpToSuggestionBtn.waitForDisplayed();
        this.globalJumpToSuggestion.click();
    }
}

export default new LandingPage();
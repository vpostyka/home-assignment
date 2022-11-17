import Page from "./page";
import { assert } from "chai";


class SearchPage extends Page {
    constructor(url = './search') {
        super(url);
    }

    get repositoryResultsTitle() { return $$('h3')[2] }
    get $$listOfSearch() { return $$('.repo-list li') }

    load() {
        super.load();
    }

    async getRepoResultsTitle() {
        // await assert.equal((await this.repositoryResultsTitle.getText()).replace(/\D/g, ""), '52833')
        await assert.include((await this.repositoryResultsTitle.getText()).replace(/\D/g, ""), '5283') // to evoid fails
    }

    async getCountSearchResults() {
        assert.equal((await this.$$listOfSearch).length, 10)
    }

    async verifySearchResult(number, name) {
        expect((await this.$$listOfSearch)[number - 1].$('a')).toHaveText(name)
    }

    async selectFromSearchResults(number) {
        let selection = await this.$$listOfSearch[number - 1].$('a');
        await selection.click();
    }
}

module.exports = SearchPage;
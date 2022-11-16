const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');
const AboutPage = require('../pageobjects/about.page');

const home = new HomePage();
const searchPage = new SearchPage();
const aboutPage = new AboutPage();

describe('Search functionality', () => {
    before(function (){
        home.load();
        home.waitForLoad();
    });

    it('should load landing page properly', async () => {
       await expect(home.$siteHeader).toBeExisting();
       await expect(home.$siteNav).toBeExisting();
       await expect(home.$siteFooter).toBeExisting();
    });

    it('should make a search', async () => {
        await home.makeASearch('create-react-app');
        await expect(browser).toHaveUrl('search',{containing: true});
        await expect(browser).toHaveUrl('create-react-app',{containing: true});
    });

    it('should verify title text', async () => {
       await searchPage.getRepoResultsTitle();
    });

    it('should be 10 results on page', async  () => {
        await searchPage.getCountSearchResults();
    });

    it('should check first result in the list', async ()=> {
       await searchPage.verifySearchResult(1,'facebook/create-create-app');
    });

    it('should click on selection', async ()=> {
        await searchPage.selectFromSearchResults(1);
        await browser.pause(3000);
    });
});

describe('About', () => {
    before(function (){
        home.load();
        home.waitForLoad();
    });

    it('should open about',async ()=> {
        await home.clickAboutButton();
    });

    it('should be on about page', async () => {
        await aboutPage.verifyAboutUrl();
        await expect(home.$siteHeader).toBeExisting();
        await expect(home.$siteNav).toBeExisting();
        await expect(home.$siteFooter).toBeExisting();
    })
})



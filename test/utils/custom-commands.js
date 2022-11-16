const addBrowserCustomCommands = async function () {
    browser.addCommand(
        'clickOn',
        function () {
            this.waitForDisplayed();
            this.click();
        },
        true
    );

    browser.addCommand(
        'type',
        async function (text) {
            await this.waitForDisplayed();
            this.click();
            await this.setValue(text);
        },
        true
    );

    browser.addCommand('waitUntilPageFullyLoaded', async function (url) {
        this.waitUntil(
            () => {
                const pageState = browser.execute(() => {
                    return document.readyState === 'complete';
                });
                let currentUrl = browser.getUrl();
                return pageState === true && currentUrl.includes(url);
            },
            { timeoutMsg: `Expected page was not Loaded: ${url}` }
        );
    });
};

module.exports = { addBrowserCustomCommands };
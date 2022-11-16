module.exports = {
    waitForPageToLoad: function () {
        return this.waitUntil(function () {
            const status = this.execute("return document.readyState");
            return status === "interactive";
        });
    },
    waitForUrlToContain: function (expectedUrl) {
        return this.waitUntil(
           async function () {
                const currentUrl = this.getUrl();
                return currentUrl.includes(expectedUrl);
            },
            { timeoutMsg: "User was not redirected to expected page" }
        );
    },
}
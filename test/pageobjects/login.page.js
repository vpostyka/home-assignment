import Page from './page';

class LoginPage extends Page {
    constructor(url = './login') {
        super(url);
    }

    load() {
        super.load();
    }

    get inputUsername() {return $('#login_field')};
    get inputPassword() {return $('#password')};
    get btnSubmit() {return $('button[type="submit"]')};

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


}

export default new LoginPage();

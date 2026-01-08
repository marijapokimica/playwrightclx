import { Page, Locator } from "@playwright/test";

export class Login {

    private readonly page: Page;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly nextToLogin: Locator;
    private readonly loginPopUpNext: Locator;
    private readonly startEbanking: Locator

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.nextToLogin = page.locator("#submit");
        this.loginPopUpNext = page.locator("#loginPopupButtonNext");
        this.startEbanking = page.locator('#login');
    }

    async inputUserNameAndPassword(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async selectNextToLogin() {
        await this.nextToLogin.click();
    }

    async selectloginPopupNext() {
        await this.loginPopUpNext.click();
    }


    async startEBanking() {
        await this.startEbanking.click();
    }

    async login(username: string, password: string) {
        await this.inputUserNameAndPassword(username, password);
        await this.selectNextToLogin();
        await this.page.waitForTimeout(3000);
        if (await this.loginPopUpNext.isVisible({ timeout: 3000 }).catch(() => false)) {
            await this.selectloginPopupNext();
        }

        await this.startEBanking();
    }

}
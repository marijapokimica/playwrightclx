import { Page, Locator } from "@playwright/test";

export class ConfirmPaymentPage {

    private readonly page: Page;
    private readonly confirmButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmButton = page.locator('#popupConfirmButton:visible')
    }

        async pressConfirm() {
        await this.confirmButton.click();
    }
}
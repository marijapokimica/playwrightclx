import { Page, Locator } from "@playwright/test";

export class PaymentSubmittedPopup {

    private readonly page: Page;
    private readonly OKButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.OKButton = page.locator("#popupOverviewButton");
    }

        async pressOKSubmitted() {
        await this.OKButton.click();
    }
}
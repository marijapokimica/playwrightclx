import { Page, Locator } from "@playwright/test";

export class SinglePaymentForm {

    private readonly page: Page;
    private readonly domesticLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.domesticLink = page.locator("#newChDomesticLink");
        
    }
    
    async selectDomesticPayment(){
        await this.domesticLink.click();
    }

    
}
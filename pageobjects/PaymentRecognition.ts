import { Page, Locator } from "@playwright/test";

export class PaymentRecognition {

    private readonly page: Page;
    private readonly paymentForm: Locator;


    constructor(page: Page) {
        this.page = page;
        this.paymentForm = page.locator("(//*[@id='paymentRecognitionHeader']//button)[3]");
    }

    async selectFormsOfPayment(){
        await this.paymentForm.click();
    }


}
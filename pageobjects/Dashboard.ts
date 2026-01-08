import { Page,Locator } from "@playwright/test";    

export class Dashboard {

private readonly page:Page;
private readonly paymentsMenu:Locator;
private readonly newPayment:Locator;

constructor(page:Page){
    this.page = page;
    this.paymentsMenu = page.locator("#commonPaymentTab");
     this.newPayment = page.locator("#singlePayment");
}

async openPayments(){
    await this.paymentsMenu.click();
}

async openNewPayment(){
    await this.newPayment.click();
}

}
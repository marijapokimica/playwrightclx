import { Page, Locator } from "@playwright/test";

export class SinglePaymentEntry {

    private readonly page: Page;
    private readonly creditAccountInput: Locator;
    private readonly amountInput: Locator;
    private readonly beneficiaryNameInput: Locator;
    private readonly beneficiaryStreetInput: Locator;
    private readonly beneficiaryHouseNoInput: Locator;
    private readonly beneficiaryPostCodeInput: Locator;
    private readonly beneficiaryTownInput: Locator;
    private readonly beneficiaryDomesticCountryDropdown: Locator;
    private readonly benefCountryDropdownOptions: Locator;
    private readonly paymentSendBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.creditAccountInput = page.locator("#chPaymentBeneficiaryAccountNoInput");
        this.amountInput = page.locator("#chPaymentAmountInput");
        this.beneficiaryNameInput = page.locator("#chPaymentBeneficiaryNameInput");
        this.beneficiaryStreetInput = page.locator("#chPaymentBeneficiaryStreetInput");
        this.beneficiaryHouseNoInput = page.locator("#chPaymentBeneficiaryHouseNumInput");
        this.beneficiaryPostCodeInput = page.locator("#chPaymentBeneficiaryPostCodeInput");
        this.beneficiaryTownInput = page.locator("#chPaymentBeneficiaryTownInput");
        this.beneficiaryDomesticCountryDropdown = page.locator("#chPaymentBeneficiaryCountryInputSelect");
        this.benefCountryDropdownOptions = page.locator("#chPaymentBeneficiaryCountryInputListOptions div[role='option']");
        this.paymentSendBtn = page.locator("#paymentSendButtonText")

    }

    async typeCreditAccount(creditAccount: string) {
        await this.creditAccountInput.fill(creditAccount);
    }

    async typeAmount(amount: string) {
        await this.amountInput.fill(amount);
    }

    async typeBeneficiaryName(benName: string) {
        await this.beneficiaryNameInput.fill(benName);
    }

    async typeBeneficiaryStreet(street: string) {
        await this.beneficiaryStreetInput.fill(street);
    }

    async typeBeneficiaryHouseNumber(houseNo: string) {
        await this.beneficiaryHouseNoInput.fill(houseNo);
    }

    async typeBeneficiaryPostCode(pcode: string) {
        await this.beneficiaryPostCodeInput.fill(pcode);
    }

    async typeBeneficiaryTown(town: string) {
        await this.beneficiaryTownInput.fill(town);
    }

    async openBeneficiaryDomesticCountryDropdown() {
        await this.beneficiaryDomesticCountryDropdown.click()
    }

    async selectCountry(option: string) {
        const options = this.benefCountryDropdownOptions;
        const count = await options.count();

        for (let i = 0; i < count; i++) {
            const current = options.nth(i);
            await current.scrollIntoViewIfNeeded();
            const text = await current.locator('.tagOptionText').innerText();
            if (text.trim() === option) {
                await current.click();
                return;
            }
        }

        throw new Error(`Country option not found: ${option}`);
    }

    async pressSend() {
        await this.paymentSendBtn.click();
    }
}
import { test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { PageObjectManager } from "../managers/PageObjectManager";
import { RandomDataUtil } from "../pageobjects";

//const dataSet = JSON.parse(JSON.stringify(require('../utils/TestData.json')));

let config: TestConfig;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
});

test('@master clx test payment', async ({ page }) => {
    const pom = new PageObjectManager(page);
    const beneficiaryName = RandomDataUtil.fullName();

    await pom.login.login(config.username, config.password);
    await pom.dashboard.openPayments();
    await pom.dashboard.openNewPayment();
    await pom.paymentRecognition.selectFormsOfPayment();
    await pom.singlePaymentForm.selectDomesticPayment();
    await pom.singlePaymentEntry.typeCreditAccount(config.creditAccount);
    await pom.singlePaymentEntry.typeAmount("10");
    await pom.singlePaymentEntry.typeBeneficiaryName(beneficiaryName);
    await pom.singlePaymentEntry.typeBeneficiaryStreet(RandomDataUtil.street());
    await pom.singlePaymentEntry.typeBeneficiaryHouseNumber(RandomDataUtil.buildingNumber());
    await pom.singlePaymentEntry.typeBeneficiaryPostCode(RandomDataUtil.postcode());
    await pom.singlePaymentEntry.typeBeneficiaryTown(RandomDataUtil.city());
    await pom.singlePaymentEntry.openBeneficiaryDomesticCountryDropdown();
    await pom.singlePaymentEntry.selectCountry(RandomDataUtil.country());
    await pom.singlePaymentEntry.pressSend();
    await pom.confirmPaymentPage.pressConfirm();
    await pom.paymentSubmittedPopup.pressOKSubmitted();


    await pom.paymentOverview.waitForVisible();
   const found = await pom.paymentOverview.hasRow(beneficiaryName);
        expect(found).toBeTruthy();
});



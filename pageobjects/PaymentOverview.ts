import { Page, Locator } from "@playwright/test";

export class PaymentOverview {

    private readonly page: Page;
    private readonly table: Locator;

    constructor(page: Page) {
        this.page = page;
        this.table = page.locator('table#overviewTable');
    }

    getTable(): Locator {
        return this.table;
    }

    async waitForVisible(): Promise<void> {
        await this.table.waitFor({ state: 'visible' });
    }


    async hasRow(...patterns: Array<string | RegExp>): Promise<boolean> {
        if (patterns.length === 0) {
            return false;
        }

        const rowMatches = async (): Promise<boolean> => {
            const rows = await this.table.locator('tr').all();
            for (const row of rows) {
                const rowText = (await row.locator('td').allInnerTexts()).join(' ');
                const allMatch = patterns.every((p) =>
                    typeof p === 'string' ? rowText.includes(p) : p.test(rowText)
                );
                if (allMatch) {
                    return true;
                }
            }
            return false;
        };

        if (await rowMatches()) {
            return true;
        }

        const pgButtons = this.table.locator("xpath=./../..//*[contains(@class,'pgButton') and @aria-hidden='false']");
        if (await pgButtons.count() <= 1) {
            return false;
        }

        let lastSelected = '1';
        let currentButton = 1;
        let lastButtonVisible = 1;
        let nextButtonIndex = 0;
        let isLastSelectedFound = false;

        do {
            const buttons = await pgButtons.all();
            lastButtonVisible = 1;
            isLastSelectedFound = false;
            nextButtonIndex = 0;

            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                if (await button.isVisible()) {
                    const text = (await button.innerText()).trim();
                    if (!isLastSelectedFound && text === lastSelected) {
                        nextButtonIndex = i + 1;
                        isLastSelectedFound = true;
                    }
                    const numeric = parseInt(text, 10);
                    if (!Number.isNaN(numeric)) {
                        lastButtonVisible = numeric;
                    }
                }
            }

            if (!isLastSelectedFound || nextButtonIndex >= buttons.length) {
                return false;
            }

            const nextButton = buttons[nextButtonIndex];
            lastSelected = (await nextButton.innerText()).trim();
            await nextButton.click();
            currentButton = parseInt(lastSelected, 10);

            if (await rowMatches()) {
                return true;
            }
        } while (currentButton < lastButtonVisible);

        return false;
    }


}
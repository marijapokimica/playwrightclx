import { Page } from '@playwright/test';
import {
  Login,
  Dashboard,
  SinglePaymentEntry,
  SinglePaymentForm,
  PaymentOverview,
  ConfirmPaymentPage,
  PaymentRecognition,
  PaymentSubmittedPopup,
  RandomDataUtil
} from '../pageobjects';

export class PageObjectManager {
  constructor(private readonly page: Page) {}

  private _login?: Login;
  private _dashboard?: Dashboard;
  private _singlePaymentEntry?: SinglePaymentEntry;
  private _singlePaymentForm?: SinglePaymentForm;
  private _paymentOverview?: PaymentOverview;
  private _confirmPaymentPage?: ConfirmPaymentPage;
  private _paymentRecognition?: PaymentRecognition;
  private _paymentSubmittedPopup?: PaymentSubmittedPopup;
  private _randomDataUtil?: RandomDataUtil;

  get login(): Login {
    return this._login ??= new Login(this.page);
  }

  get dashboard(): Dashboard {
    return this._dashboard ??= new Dashboard(this.page);
  }

  get singlePaymentEntry(): SinglePaymentEntry {
    return this._singlePaymentEntry ??= new SinglePaymentEntry(this.page);
  }

  get singlePaymentForm(): SinglePaymentForm {
    return this._singlePaymentForm ??= new SinglePaymentForm(this.page);
  }

  get paymentOverview(): PaymentOverview {
    return this._paymentOverview ??= new PaymentOverview(this.page);
  }

  get confirmPaymentPage(): ConfirmPaymentPage {
    return this._confirmPaymentPage ??= new ConfirmPaymentPage(this.page);
  }

  get paymentRecognition(): PaymentRecognition {
    return this._paymentRecognition ??= new PaymentRecognition(this.page);
  }

  get paymentSubmittedPopup(): PaymentSubmittedPopup {
    return this._paymentSubmittedPopup ??= new PaymentSubmittedPopup(this.page);
  }

    get randomDataUtil(): RandomDataUtil{
    return this._randomDataUtil ??= new RandomDataUtil();
  }
}
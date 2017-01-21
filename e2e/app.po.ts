import {  element, by } from 'protractor';
const Browser = require('zombie');


export class NodulusXPage {

  browser = new Browser();

  navigateTo() {
    return this.browser.visit('/');
  }


  navigateToLogin() {
    return this.browser.visit('/login');
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }
}

import { Page } from "@playwright/test";
import { IPhonePage } from "./iPhonePage";

export class PageManager {
  iPhonePage: IPhonePage;

  constructor(page: Page) {
    this.iPhonePage = new IPhonePage(page);
  }
}

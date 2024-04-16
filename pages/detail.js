import BasePage from "./base.js";

export default class NoteDetailPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async getPageTitle() {
    const pageTitleComponent = await this.find(
      '//android.view.View[@content-desc="Note Details"]'
    );

    const pageTitle = await pageTitleComponent.getAttribute("content-desc");
    return pageTitle;
  }

  async getNoteTitle() {
    const noteTitleComponent = await this.find(
      '//android.view.View[@content-desc="Investor Implementation Consultant"]'
    );

    const noteTitle = await noteTitleComponent.getAttribute("content-desc");
    return noteTitle;
  }

  async getNoteContent() {
    const noteContentComponent = await this.find(
      '//android.view.View[@content-desc="Regional"]'
    );

    const noteContent = await noteContentComponent.getAttribute("content-desc");
    return noteContent;
  }
}

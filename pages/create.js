import BasePage from "./base.js";

export default class CreateNotePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async insertNoteTitle(title) {
    const noteTitleElement =
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]";

    await this.click(noteTitleElement);

    await this.type(noteTitleElement, title);
  }

  async insertNoteContent(content) {
    const noteContentElement =
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]";

    await this.click(noteContentElement);

    await this.type(noteContentElement, content);
  }

  async tapCreateButton() {
    await this.click('//android.widget.Button[@content-desc="Create"]');
  }

  async getPageTitle() {
    const pageTitleComponent = await this.find(
      '//android.view.View[@content-desc="Create a Note"]'
    );

    const pageTitle = await pageTitleComponent.getAttribute("content-desc");
    return pageTitle;
  }
}

import BasePage from "./base.js";

export default class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async getTitle() {
    const titleComponent = await this.find(
      '//android.view.View[@content-desc="Notes"]'
    );

    const title = await titleComponent.getAttribute("content-desc");
    return title;
  }

  async getSampleNote() {
    const sampleNoteComponent = await this.find(
      `//android.view.View[@content-desc="1
Investor Implementation Consultant"]`
    );

    const noteTitle = await sampleNoteComponent.getAttribute("content-desc");

    return noteTitle;
  }

  async tapPlusButton() {
    await this.click(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button"
    );
  }

  async tapCertainNote() {
    await this.click(`//android.view.View[@content-desc="1
Investor Implementation Consultant"]`);
  }
}

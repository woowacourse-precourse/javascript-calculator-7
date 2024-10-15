import CustomSplitModel from "../model/CustomSplitModel.js";
import DefaultSplitModel from "../model/DefaultSplitModel.js";
import InputView from "../view/TextInputView.js";

class StringSumCalController {
  constructor() {
    this.inputView = new InputView(this);
    this.CustomSplit = new CustomSplitModel();
    this.DefaultSplit = new DefaultSplitModel();
  }

  async getDelimeterType() {
    const inputText = await this.inputView.getInputText();
    if (inputText.startsWith("//")) {
      this.CustomSplit.temp();
    } else {
      this.DefaultSplit.temp();
    }
  }
}

export default StringSumCalController;

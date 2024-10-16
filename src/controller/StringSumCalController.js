import CustomSplitModel from "../model/GetDelimiterModel.js";
import SplitModel from "../model/SplitModel.js";
import InputView from "../view/TextInputView.js";

class StringSumCalController {
  constructor() {
    this.inputView = new InputView(this);
    this.CustomSplitModel = new CustomSplitModel();
    this.SplitModel = new SplitModel();
  }

  async transferDelimiter() {
    const inputText = await this.inputView.getInputText();
    let customDelimiter;
    if (inputText.startsWith("//")) {
      customDelimiter = this.CustomSplitModel.getDelimiter(inputText);
    }
    this.SplitModel.stringSplit(customDelimiter);
  }
}

export default StringSumCalController;

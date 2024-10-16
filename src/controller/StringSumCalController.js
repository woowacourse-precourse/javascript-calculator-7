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
    let inputText = await this.inputView.getInputText();
    let delimiter;
    if (inputText.startsWith("//")) {
      delimiter = this.CustomSplitModel.getDelimiter(inputText);
      inputText = inputText.split("\\n")[1];
    }
    this.SplitModel.stringSplit(delimiter, inputText);
  }
}

export default StringSumCalController;

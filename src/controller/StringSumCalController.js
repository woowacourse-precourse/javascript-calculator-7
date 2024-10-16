import CalculateSumModel from "../model/CalculateSumModel.js";
import CustomSplitModel from "../model/GetDelimiterModel.js";
import SplitModel from "../model/SplitModel.js";
import TextInputView from "../view/TextInputView.js";

class StringSumCalController {
  constructor() {
    this.TextInputView = new TextInputView(this);
    this.CustomSplitModel = new CustomSplitModel();
    this.SplitModel = new SplitModel();
    this.CalculateSumModel = new CalculateSumModel();
  }

  async transferDelimiter() {
    let inputText = await this.TextInputView.getInputText();
    let delimiter;
    if (inputText.startsWith("//")) {
      delimiter = this.CustomSplitModel.getDelimiter(inputText);
      inputText = inputText.split("\\n")[1];
    }
    const splitString = this.getSplitString(delimiter, inputText);
    const total = this.getTotal(splitString);
    return total;
  }

  getSplitString(delimeter, inputText) {
    return this.SplitModel.stringSplit(delimeter, inputText);
  }

  getTotal(splitString) {
    const total = this.CalculateSumModel.calculateSum(splitString);
  }
}

export default StringSumCalController;

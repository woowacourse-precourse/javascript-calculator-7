import CalculateSumModel from "../model/CalculateSumModel.js";
import CustomSplitModel from "../model/GetDelimiterModel.js";
import SplitModel from "../model/SplitModel.js";
import SumOutputView from "../view/SumOutputView.js";
import TextInputView from "../view/TextInputView.js";

class StringSumCalController {
  constructor() {
    this.TextInputView = new TextInputView(this);
    this.SumOutputView = new SumOutputView();
    this.CustomSplitModel = new CustomSplitModel();
    this.SplitModel = new SplitModel();
    this.CalculateSumModel = new CalculateSumModel();
  }

  async transferDelimiter() {
    let inputText = await this.TextInputView.getInputText();
    let [operationText, delimiter] = this.getParts(inputText);
    const splitArray = this.SplitModel.stringSplit(delimiter, operationText);
    const total = this.CalculateSumModel.calculate(splitArray);
    this.SumOutputView.printOutput(total);
  }

  getParts(inputText) {
    let operationText = inputText;
    let delimiter = /[:,]/;
    //커스텀 구분자가 있을 경우 구분자와 연산식을 변경
    if (inputText.startsWith("//")) {
      [delimiter, operationText] =
        this.CustomSplitModel.getDelimiter(inputText);
    }
    return [operationText, delimiter];
  }
}

export default StringSumCalController;

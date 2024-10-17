import InputView from "../views/inputview.js";
import OutputView from "../views/outputview.js";
import extractNumbers from "../models/extractnumber.js";
import validateInput from "../models/validateinput.js";
import calculateSum from "../models/sumnumbers.js";

class StringAdditionController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async startRun() {
    const input = await this.inputView.getCalcNumber();

    //입력값 검증
    const isValid = validateInput(input);
    if (!isValid) return;

    //숫자 추출
    const NUMBERS = extractNumbers(input);

    //숫자 합 계산
    const sum = calculateSum(NUMBERS);

    //결과 출력
    this.outputView.printCalcsum(sum);
  }
}

export default StringAdditionController;

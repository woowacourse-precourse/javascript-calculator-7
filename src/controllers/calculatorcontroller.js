import InputView from "../views/inputview.js";
import OutputView from "../views/outputview.js";
import extractNumbers from "../models/extractnumber.js";
import validateInput from "../models/validateinput.js";
import calculateSum from "../models/sumnumbers.js";

class calsculatorController {
  constructor() {
    // InputView와 OutputView 인스턴스 초기화
    this.inputView = new InputView();
    this.outputView = new OutputView();

    (this.handleSubmit = this.handleSubmit), bind(this);
  }

  initialize() {
    this.inputView.onSubmit(this.handleSubmit);
  }

  handlesubmit(inputString) {
    //입력값 검증
    const isValid = validateInput(inputString);

    //문자열에서 숫자 추출
    const NUMBERS = extractNumbers(inputString);

    //숫자 합 계산
    const sum = calculateSum(sum);
  }
}

const calsculatorController = new calsculatorController();
calsculatorController.initialize();

export default calsculatorController;

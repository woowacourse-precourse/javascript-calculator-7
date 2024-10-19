import UserInput from "../models/userInput.js";
import checkErrors from "../utils/Validation.js";
import checkCustomDelimiter from "../utils/CheckCustomDelimiter.js";
import cuttingInput from "../utils/CuttingInput.js";
import sumOfArray from "../utils/SumOfArray.js";
import inputView from "../views/InputView.js";
import outputView from "../views/OutputView.js";

class Controller {
  #userInput;

  async run() {
    /**
     * 사용자의 입력을 저장하는 클래스
     */
    this.#userInput = new UserInput();
    this.#userInput.setInput(await inputView());

    /**
     * 커스텀 구분자 확인하고 자른 후 숫자 배열로 변환
     */
    const CUSTOM_DELIMITER = checkCustomDelimiter(this.#userInput.getInput());
    const PROCESSED_INPUT = cuttingInput(
      this.#userInput.getInput(),
      CUSTOM_DELIMITER
    );

    /**
     * 에러 확인
     */
    checkErrors(PROCESSED_INPUT);

    /**
     * 숫자의 합 계산
     */
    const SUM = sumOfArray(PROCESSED_INPUT);
    outputView(SUM);
  }
}

export default Controller;

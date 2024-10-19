import { Console } from "@woowacourse/mission-utils";
import Messages from "./constants/Messages.js";
import UserInput from "../models/userInput.js";
import checkErrors from "./Validation.js";
import checkCustomDelimiter from "../utils/CheckCustomDelimiter.js";
import cuttingInput from "../utils/CuttingInput.js";
import sumOfArray from "../utils/SumOfArray.js";

class Controller {
  #userInput;

  async run() {
    /**
     * 사용자의 입력을 저장하는 클래스
     */
    this.#userInput = new UserInput();
    this.#userInput.setInput(
      await Console.readLineAsync(Messages.INPUT_MESSAGE)
    );

    /**
     * 커스텀 구분자 확인하고 자른 후 숫자 배열로 변환
     */
    const CUSTOM_DELIMITER = checkCustomDelimiter(this.#userInput.getInput());
    const PROCESSED_INPUT = cuttingInput(
      this.#userInput.getInput(),
      CUSTOM_DELIMITER
    );
    const NUMBERS_ARRAY = PROCESSED_INPUT.split(CUSTOM_DELIMITER).map(Number);

    /**
     * 에러 확인
     */
    checkErrors(NUMBERS_ARRAY);

    /**
     * 숫자의 합 계산
     */
    const SUM = sumOfArray(NUMBERS_ARRAY);
    Console.print(`${Messages.OUTPUT_MESSAGE}${SUM}`);
  }
}

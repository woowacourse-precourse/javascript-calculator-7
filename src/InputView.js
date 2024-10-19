import { Console } from "@woowacourse/mission-utils";
import {
  DEFAULT_DELIMITER,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
} from "./constants.js";

const InputView = {
  async getUserInput() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.COMPOUND_STRING);
      InputValidation.isValidateForm(input);
      return input;
    } catch (error) {
      throw error;
    }
  },
};

const InputValidation = {
  isValidateForm(input) {
    if (typeof input !== "string") {
      throw new Error(ERROR_MESSAGE.WRONG_INPUT_STRING);
    }

    if (input.startsWith("//")) {
      this.customDelimeterInputValidate(input);
    } else {
      this.defaultDelimterInputValidate(input);
    }
  },

  customDelimeterInputValidate(input) {
    let intStr = input;
    let customDelimeterEndIndex = intStr.indexOf("\\n");

    // 1. "//" 다음에 "\n"이 없으면 예외 처리
    if (customDelimeterEndIndex === -1) {
      throw new Error(ERROR_MESSAGE.WRONG_CUSTOM_DELIMETER);
    }

    let customDelimeter = intStr.substring(2, customDelimeterEndIndex);
    // 2. 구분자가 비어 있거나 길이가 1을 초과하는 경우 예외 처리
    if (customDelimeter.length === 0 || customDelimeter.length > 1) {
      throw new Error(ERROR_MESSAGE.WRONG_CUSTOM_DELIMETER);
    }
    // 3. 구분자가 숫자일 경우 예외 처리
    if (!isNaN(customDelimeter)) {
      throw new Error(ERROR_MESSAGE.WRONG_CUSTOM_DELIMETER);
    }
    let numbers = [];
    intStr = intStr.substring(customDelimeterEndIndex + 2);
    numbers = intStr.split(customDelimeter);
    // 4. 구분자로 분리한 숫자 배열에서 숫자가 아닌 값 또는 빈 값이 있는 경우 예외 처리
    for (let number of numbers) {
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGE.WRONG_CUSTOM_DELIMETER);
      }
      if (Number(number) < 0) {
        throw new Error(ERROR_MESSAGE.WRONG_CUSTOM_DELIMETER);
      }
    }
  },

  defaultDelimterInputValidate(input) {
    if (input !== "") {
      let numbers = [];
      numbers = input.split(DEFAULT_DELIMITER);
      for (let number of numbers) {
        if (isNaN(number)) {
          throw new Error(ERROR_MESSAGE.WRONG_DEFAULT_DELIMETER);
        }
        if (Number(number) < 0) {
          throw new Error(ERROR_MESSAGE.WRONG_INPUT_STRING_NEGATIVE);
        }
      }
    }
  },
};

export default InputView;

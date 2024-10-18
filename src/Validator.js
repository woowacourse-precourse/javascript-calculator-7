import { Console } from "@woowacourse/mission-utils";
import { Calculator } from "./Calculator.js";

const CUSTOM_END = "\n";

export class Validator {
  static customDelimiterLength(customDelimiter) {
    if (customDelimiter.length !== 1) {
      throw new Error(
        "[ERROR] 올바른 커스텀 구분자를 입력해 주세요.(1개의 문자)"
      );
    }
  }

  static isCustomDelimiterString(customDelimiter) {
    if (/\d/.test(customDelimiter)) {
      throw new Error("[ERROR] 숫자는 커스텀 구분자로 지정할 수 없습니다.");
    }
  }

  static duplicatedSet(string) {
    const CUSTOM_END_INDEX = string.indexOf(CUSTOM_END);

    if (Calculator.isSetCustomDelimiter(string, CUSTOM_END_INDEX)) {
      throw new Error("[ERROR] 커스텀 구분자는 한 번만 지정할 수 있습니다.");
    }
  }

  static containUndelimitedChars(string, customDelimiter) {
    const DELIMITER = [",", ":"];
    if (customDelimiter !== undefined) {
      DELIMITER.push(customDelimiter);
    }

    if (
      [...string].some(
        (element) => !DELIMITER.includes(element) && isNaN(element)
      )
    ) {
      throw new Error(
        "[ERROR] 기본/커스텀 구분자를 제외한 문자가 포함되어 있습니다."
      );
    }
  }
}

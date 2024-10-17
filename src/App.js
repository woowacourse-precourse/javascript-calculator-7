import { MESSAGES, DEFAULT_SEPARATORS } from "./constants/index.js";
import {
  getUserInput,
  replaceAllPattern,
  parseUserInput,
  extractCustomSeparators,
  isValidCustomSeparator,
  assertCondition,
  mergeSeparators,
  convertRegExp,
  splitBySeparators,
  sumNumbers,
  isAllPositive,
  PrintMessage,
} from "./utils/index.js";

class App {
  async run() {
    try {
      const userInput = await getUserInput(MESSAGES.USER_INPUT);
      // 이스케이프 시퀀스 문자열 "\n"을 일관성 있게 처리
      const userInputString = replaceAllPattern(userInput, "\\n", "\n");

      // 사용자 입력을 커스텀 문자열과 숫자 문자열로 나눈다.
      const { customString, numberString } = parseUserInput(userInputString);

      // 커스텀 문자열을 기준으로 커스텀 구분자를 추출한다.
      const customSeparators = extractCustomSeparators(customString);

      // 커스텀 문자열이 있는데 형식에 맞지 않다면 예외 처리
      assertCondition(!isValidCustomSeparator(customString, customSeparators), MESSAGES.INVALID_CUSTOM_SEPARATOR);

      // 기본 구분자 + 커스텀 구분자
      const separators = mergeSeparators(...customSeparators, ...DEFAULT_SEPARATORS);
      const regExpSeparator = convertRegExp(separators.join("|"), "g");

      // 기본 구분자 + 커스텀 구분자를 기준으로 숫자 문자열을 나누고, 숫자로 변환한다.
      const numbers = splitBySeparators(numberString, regExpSeparator);

      // 숫자가 모두 양수가 아니라면 예외 처리
      assertCondition(!isAllPositive(numbers), MESSAGES.INVALID_ALL_POSITIVE);

      // 합산 결과 출력
      const sum = sumNumbers(numbers);
      PrintMessage(MESSAGES.RESULT + sum);
    } catch (error) {
      PrintMessage(error.message);
      throw error;
    }
  }
}

export default App;

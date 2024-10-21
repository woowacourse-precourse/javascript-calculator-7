import { Console } from "@woowacourse/mission-utils";

const ERROR_INVALID_DELIMITER =
  "[ERROR] 유효하지 않은 구분자입니다. 올바른 구분자를 사용해주세요.";
const ERROR_INVALID_INPUT =
  "[ERROR] 입력값이 올바르지 않습니다. 문자열 형식으로 입력해주세요";
const ERROR_INVALID_NUMBER =
  "[ERROR] 입력된 숫자 중 음수, 0 또는 잘못된 값이 있습니다. 모든 숫자는 양수여야 합니다.";

const DEFAULT_SEPARATORS = /[,:]/; // 기본 구분자
const INVALID_SEPARATORS_REGEX = /[^\d,:\n]/;

const parseCustomDelimiter = input => {
  const match = input.match(/\/\/(.+?)\\n/);

  if (!match) {
    throw new Error(ERROR_INVALID_DELIMITER);
  }

  const customDelimiter = match[1];

  if (customDelimiter.length !== 1) {
    throw new Error(ERROR_INVALID_DELIMITER);
  }

  return new RegExp(`[${customDelimiter},:]`); // 커스텀 구분자와 기본 구분자 포함
};

const validateNumbers = numbers => {
  numbers.forEach(v => {
    const num = parseFloat(v);
    if (num <= 0 || Number.isNaN(num)) {
      throw new Error(ERROR_INVALID_NUMBER);
    }
  });
};

class App {
  async run() {
    const inputMessage = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    let message = inputMessage.trim();

    if (!message) {
      Console.print("결과 : 0");
      return;
    }

    if (typeof message !== "string") {
      throw new Error(ERROR_INVALID_INPUT);
    }


    let separators = DEFAULT_SEPARATORS; // 기본 구분자 설정

    if (message.startsWith("//")) {
      separators = parseCustomDelimiter(message);
      message = message.replace(/\/\/.*?\\n/, ""); // 커스텀 구분자 제거
    } else if (INVALID_SEPARATORS_REGEX.test(message)) {
      throw new Error(ERROR_INVALID_DELIMITER);
    }

    const numbers = message.split(separators).filter(Boolean); // 빈 문자열 필터링
    validateNumbers(numbers); // 숫자 유효성 검사

    const answer = numbers.reduce((acc, cur) => acc + +cur, 0); // 합계 계산
    Console.print(`결과 : ${answer}`);
  }
}

export default App;

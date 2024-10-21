import { Console } from "@woowacourse/mission-utils";

const DEFAULT_SEPARATORS = /[,:]/; // 기본 구분자
const INVALID_SEPARATORS_REGEX = /[^\d,:\n]/;

const parseCustomDelimiter = input => {
  const match = input.match(/\/\/(.+?)\\n/);

  if (!match) {
    throw new Error("[ERROR] 유효하지 않은 구분자입니다. 올바른 구분자를 사용해주세요.");
  }

  const customDelimiter = match[1];

  if (customDelimiter.length !== 1) {
    throw new Error("[ERROR] 유효하지 않은 구분자입니다. 올바른 구분자를 사용해주세요.");
  }

  return new RegExp(`[${customDelimiter},:]`); // 커스텀 구분자와 기본 구분자 포함
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

    let separators = DEFAULT_SEPARATORS; // 기본 구분자 설정

    if (message.startsWith("//")) {
      separators = parseCustomDelimiter(message);
      message = message.replace(/\/\/.*?\\n/, ""); // 커스텀 구분자 제거
    } else if (INVALID_SEPARATORS_REGEX.test(message)) {
      throw new Error("[ERROR] 유효하지 않은 구분자입니다. 올바른 구분자를 사용해주세요.");
    }
  }
}

export default App;

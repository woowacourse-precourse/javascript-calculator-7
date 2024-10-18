import { MissionUtils } from "@woowacourse/mission-utils";

const FIND_CUSTOM_REGEX = /^\/\/(.*?)\\n/;
const CHECK_NUMBER_REGEX = /^[0-9]*$/;

class App {
  // 기본 구분자
  #REGEX = [",", ":"];

  // 이스케이프 처리를 위한 내부 함수
  #escapeRegExp() {
    return this.#REGEX
      .map((regex) => regex.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
  }

  // 숫자만 있는지 확인하는 내부 함수
  #checkIsNumberArray(array) {
    return array.every((data) => CHECK_NUMBER_REGEX.test(data));
  }

  // 실행 함수
  async run() {
    let input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. \n"
    );

    // custom 구분자가 있는지 확인
    if (FIND_CUSTOM_REGEX.test(input)) {
      // 있다면 추출 후 REGEX 에 추가
      const customRegex = FIND_CUSTOM_REGEX.exec(input);

      this.#REGEX.push(customRegex[1]);

      // input 에서 구분자 값 제거
      input = input.replace(FIND_CUSTOM_REGEX, "");
    }

    const splitRegex = new RegExp(this.#escapeRegExp());

    // 구분자로 문자열을 나눔
    const splitInputArr = input.split(splitRegex);

    // 숫자가 아닌게 섞여있다면 , 에러 발생시킴
    if (!this.#checkIsNumberArray(splitInputArr)) {
      throw new Error("[ERROR]");
    }

    console.log("결과 : ");
  }
}

export default App;

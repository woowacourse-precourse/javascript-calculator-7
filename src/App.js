import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const separator = [",", ":"];
      const sepStrArr = this.extractInput(input, separator);
      const sepNumArr = this.toNumberArray(sepStrArr);
      Console.print(sepNumArr);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  extractInput(str, sep) {
    // 입력된 값을 구분자를 통해 분리
    // 구분자를 이용하여 정규 표현식을 만들어준뒤 split함수를 통해 분리
    const sepRegex = new RegExp(`[${sep.join("")}]+`);
    return str.split(sepRegex);
  }

  toNumberArray(strArr) {
    // 입력된 값을 검증하여 숫자 배열로 만들어주는 함수
    const numArr = strArr.map((v) => {
      if (this.isValid(v)) {
        return +v;
      }
    });

    return numArr;
  }

  isValid(str) {
    // 정규표현식을 사용하여 양수인지 확인 후 아닐경우 오류 발생
    const numRegex = /^[0-9]+$/;
    if (numRegex.test(str)) {
      return true;
    }
    if (+str < 0) throw Error("잘못된 입력입니다. 숫자는 양수만 입력해주세요!");
    throw Error("잘못된 입력입니다. 커스텀 구분자를 확인해주세요!");
  }
}

export default App;

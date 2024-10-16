import { Console } from "@woowacourse/mission-utils";

const NUM_REGEX = /^[0-9]+$/;
const SEP_REGEX = /\/\/(.*?)\\n/g;

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    this.validateString(input);
    const { str, separator } = this.makeCustomSep(input);
    const sepStrArr = this.extractInput(str, separator);
    const sepNumArr = this.toNumberArray(sepStrArr);
    Console.print(`결과 : ${this.sumNumbers(sepNumArr)}`);
  }

  validateString(str) {
    // 커스텀 구분자를 만들때 해당 부분이 문자열 앞쪽부터 연속적으로 등장하는지 확인
    const matches = [...str.matchAll(SEP_REGEX)];
    if (matches.length === 0) return;

    if (matches[0].index !== 0) throw Error("[ERROR] 잘못된 입력입니다! 구분자는 문자열의 맨 앞쪽에 와야합니다!");

    for (let i = 0; i < matches.length - 1; i += 1) {
      const endIndex = matches[i].index + matches[i][0].length;
      const nextStartIndex = matches[i + 1].index;

      if (endIndex !== nextStartIndex) {
        throw Error("[ERROR] 잘못된 입력입니다! 구분자는 문자열의 맨 앞쪽부터 연속적으로 와야합니다!");
      }
    }
  }

  extractInput(str, sep) {
    // 입력된 값을 구분자를 통해 분리
    // 구분자를 이용하여 정규 표현식을 만들어준뒤 split함수를 통해 분리
    const sepRegex = new RegExp(`[${sep.join("|")}]+`);
    return str.split(sepRegex).filter((v) => v != "");
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
    if (NUM_REGEX.test(str)) {
      return true;
    }
    if (+str < 0) throw Error("[ERROR] 잘못된 입력입니다. 숫자는 양수만 입력해주세요!");
    throw Error("[ERROR] 잘못된 입력입니다. 값을 올바르게 입력해주세요!");
  }

  makeCustomSep(str) {
    // 커스텀 구분자 생성함수
    // 정규표현식을 활용하여 커스텀 구분자를 분리 후 기본 구분자와 합쳐줌
    // 기존 문자열에서 커스텀 구분자를 만들기 위한 문자열을 삭제 후 반환해줌
    const separator = [",", ":"];
    const customeSep = [...str.matchAll(SEP_REGEX)].map((v) => v[1]);
    str = str.replace(SEP_REGEX, "");
    return { str, separator: [...customeSep, ...separator] };
  }

  sumNumbers(numArr) {
    return numArr.reduce((pVal, cVal) => pVal + cVal, 0);
  }
}

export default App;

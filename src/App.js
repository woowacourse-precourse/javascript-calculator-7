import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let seperator = [",", ":"];
    let READ_STRING = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const custom_seperator = this.findCustomSeperator(READ_STRING);

    // 커스텀 구분자가 존재할 때의 로직 처리
    if (custom_seperator.success) {
      READ_STRING = this.processCustomSeperator(
        custom_seperator.custom_seperator,
        seperator,
        READ_STRING
      );
    }

    // 여기서 남은 문자열에 구분자가 아닌 문자가 있는지 체크 후 있을 경우 에러 출력
    READ_STRING.split("").forEach((char) => {
      if (!seperator.includes(char) && (char <= "0" || char >= "9")) {
        throw new Error("[ERROR] 구분자가 아닌 문자가 포함되어 있습니다.");
      }
    });

    // 없다면 구분자를 기준으로 문자열을 나누어 배열로 만든다.
    let numbers = [];
    READ_STRING.split(new RegExp(seperator.join("|"))).forEach((element) => {
      if (element === "") {
        throw new Error("[ERROR] 구분자가 연속으로 입력되었습니다.");
      } else if (element < 0) {
        throw new Error("[ERROR] 음수가 입력되었습니다.");
      } else {
        numbers.push(parseInt(element));
      }
    });
    // 배열의 요소들을 더한 값을 반환한다.
    const result = numbers.reduce((acc, cur) => acc + cur, 0);
    Console.print(`결과 : ${result}`);
  }

  // 만약 문자열에 커스텀 구분자가 있다면, 그 구분자를 반환한다.
  findCustomSeperator(READ_STRING) {
    let custom_seperator = ",";
    const REGEX = /(\/\/).+(\\n)/gm;
    let m = REGEX.exec(READ_STRING);
    if (m) {
      const st = m[0];
      custom_seperator = st.substring(2, st.length - 2);

      return {
        success: true,
        custom_seperator: custom_seperator,
      };
    } else {
      return {
        success: false,
      };
    }
  }

  // 커스텀 구분자가 존재할 때의 로직을 처리하는 함수
  processCustomSeperator(custom_seperator, seperator, READ_STRING) {
    // 구분자 배열에 커스텀 구분자를 추가한다.
    seperator.push(custom_seperator);

    // 연산할 문자열에서 custom_seperator를 제외한 문자열을 추출한다.
    READ_STRING = READ_STRING.substring(custom_seperator.length + 4);

    return READ_STRING;
  }
}

export default App;

import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("문자열을 입력해주세요: ");

    // /,\,숫자를 제외한 문자를 구분자로 인식 (/,\, 숫자는 구분자에 포함시키지 않음)
    // 대괄호 내의 문자가 두 개 이상 들어가있으면 정규식으로 추출
    const regexp = /\/\/[^\/\\0-9]+\\n/;
    const seperators = [",", ":"];
    let inputString = input;

    //정규표현식을 통한 구분자 추출
    while (true) {
      const regexpArray = regexp.exec(inputString);
      if (regexpArray === null) {
        break;
      }
      if (regexpArray.index !== 0) {
        break;
      }
      if (regexpArray[0].length >= 6) {
        Console.print("[ERROR] 구분자는 하나씩 입력해주세요");
        throw new Error("[ERROR] 구분자는 하나씩 입력해주세요.");
      }
      seperators.push(regexpArray[0][2]);
      inputString = inputString.replace(regexp, "");
    }

    // 구분자를 제외한 입력값을 배열로 만든 후 문자와 숫자 판별
    let currentValue = "";
    let sum = 0;
    const inputArray = inputString.split("");
    inputArray.forEach((element) => {
      //element가 정수인 경우
      if (!!parseInt(element)) {
        currentValue += element;
      } else {
        /*
        element가 정수가 아닌 경우 currentValue를 확인한다.
        currentValue가 integer가 아닌 경우는 에러이다.
        currentValue가 integer인 경우 element가 구분자인지 확인한다.
        */
        if (!parseInt(currentValue)) {
          Console.print("[ERROR]");
          throw new Error("[ERROR]");
        }
        if (!seperators.includes(element)) {
          Console.print("[ERROR]");
          throw new Error("[ERROR]");
        }
        sum += parseInt(currentValue);
        currentValue = "";
      }
    });

    if (!!parseInt(currentValue)) {
      sum += parseInt(currentValue);
    }
    Console.print(`결과 : ${sum}`);
  }
}

export default App;

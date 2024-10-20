import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("문자열을 입력해주세요: ");
    const regexp = /\/\/.\\n/;
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
      seperators.push(regexpArray[0][2]);
      inputString = inputString.replace(regexp, "");
    }

    // 구분자를 제외한 인풋스트링에 대해 문자와 숫자 판별
    let currentValue = "";
    let sum = 0;
    const inputArray = inputString.split("");
    inputArray.forEach((element) => {
      //정수인 경우
      if (!!parseInt(element)) {
        currentValue += element;
      } else {
        //currentValue가 비어있지 않은 경우
        if (!parseInt(currentValue)) {
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

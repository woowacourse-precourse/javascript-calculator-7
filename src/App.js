import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
      const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
      let inputString = input.toString();
      const separators = [",", ":"];

      // 아무 것도 입력하지 않았을 경우(""), 0으로 처리하기
      if (input === "") {
          return MissionUtils.Console.print('결과 : 0');
      }

      //  문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 지정하기
      if (inputString[0] === '/' && inputString[1] === '/') {
          const searchLastWord = inputString.indexOf('\\n');
          if (searchLastWord > 0) {
              const customSeparator = inputString.slice(2, searchLastWord);
              separators.push(customSeparator);
              inputString = inputString.substring(searchLastWord + 2);
          }
      }

      const inputArray = [...inputString];
      const numArray = [];

      let string = '';
      let isPrevSeparator = true;
      let numArrayIndex = 0;

      // 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열의 경우, 구분자를 기준으로 숫자 추출하기
      inputArray.forEach((char, index) => {
          if (!(isNaN(char))) { // 숫자
              isPrevSeparator = false;
              string = string + char;
              numArrayIndex++;
              if (index === inputArray.length -1) {
                  numArray.push(string);
              }
          }
          if (separators.includes(char)) { // 구분자
              numArray.push(string);
              string = '';
              isPrevSeparator = true;
          } else if (!separators.includes(char) && isNaN(char)) {
              throw Error('[ERROR] 올바르지 않은 연산자를 사용했습니다.');
          }
      });

      // 분리한 각 숫자의 합을 반환하기
      const result = numArray
          .map((str) => parseInt(str,10))
          .reduce((acc, curr) => acc+ curr, 0);

      return MissionUtils.Console.print(`결과 : ${result}`);
  }
}

export default App;

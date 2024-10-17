import { readFileSync } from 'fs';
import readline from 'readline';
import { Console } from "@woowacourse/mission-utils";

// 1. 입출력 기능 -  입력 : '덧셈할 문자열을 입력해 주세요.\n', 한 줄로 입력받기
async function getString() {
  try {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return input;
  } catch (err) {
    Console.print(err)
  }
}

class App {
  async run() {
    try {
      // 1. 입출력 기능 -  입력
      const input = await getString();

      // 2. 구분자를 기준으로 문자열을 파싱하는 기능 구현
      var separators = [',', ':', '\//', '\\n']; // 구분자 배열 : 기본 구분자들, //, \n
      var tempString = input.trim();

      // 커스텀 구분자 찾기
      const regExp = /\/\/(.*?)\\n/g; // 커스텀 구분자 찾는 정규식
      let match;
      while ((match = regExp.exec(tempString)) !== null) { // //과 \n 안에 있는 구분자 모두 찾기
        separators.push(match[1].trim());
      }
      // Console.print(separators);

      // 3. 구분자를 기준으로 문자열을 파싱하는 기능 구현
      let NumberArray = [input]; // 초기 배열에 input을 담고 시작

      separators.forEach(separator => {
        NumberArray = NumberArray.flatMap(item => item.split(separator));
      });

      Console.print(NumberArray); // 후에 출력값으로 바뀔 예정


      // 결과 출력
      Console.print(`결과 : ${input}`); // 후에 출력값으로 바뀔 예정
      return;
    } catch(err) {
      Console.print(err); // 임시 로직
    }
  }
  
}

export default App;

// test : //;\n//#\n1;3,2
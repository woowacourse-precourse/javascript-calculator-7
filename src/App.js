// ES 모듈은 import 문법을 사용하여 모듈을 가져옴
// CommonJS 모듈은 require() 함수를 사용하여 모듈을 가져옴

// import * as fs from 'fs';
// import readline from 'readline';    // readline 모듈 : JS 내장모듈

// 라이브러리는 @woowacourse/mission-utils에서 제공되는 Console API를 사용하는 조건을 따른다
// https://github.com/woowacourse-projects/javascript-mission-utils
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const line = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
      
      let sum = 0, nums;
      if (line[0] == "/" && line[1] == "/" && line[3] == "\\" && line[4] == "n") {
        const token = line[2];
        nums = line.substr(5).split(token).map(Number);      // 순회할 문자열을 구분자 설정 이후부터
      } else 
        nums = line.split(/[,:]/).map(Number);
      
      for (let num of nums) {
        if (Number(num) >= 0)
          sum += num;
        else 
          throw new Error("[ERROR]");
      }
      
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(`[ERROR]`);
    }
  }
}

export default App;
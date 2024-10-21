import { Console } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print()

class App {
  async run() {
    try{
      let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

      if(!input) {
        const errMessage = `[ERROR] 적절하지 않은 입력 값(Empty Input)`;
        throw new Error(errMessage);
      }

      const separator = [',', ':'];
  
      while(input.match(/^\/\//g)) {
        if(input.match(/\/\/(.)\\n/)) {
          const match = input.match(/\/\/(.)\\n/);
          const customSep = match[1];
          separator.push(customSep);
          input = input.substr(match[0].length);
        } else {
          const errMessage = `[ERROR] 올바르지 않은 커스텀 구분자 지정 형식`;
          throw new Error(errMessage);
        }
      }

      const separatorRegex = new RegExp(`[${separator.join('')}]`);
      const splitArr = input.split(separatorRegex);

      const numbers = splitArr.map(num => {
        const trimmedNum = num.trim();

        if(num !== trimmedNum) {
          const errMessage = `[ERROR] 적절하지 않은 입력 값(Contain Whitespace: ${num})`;
          throw new Error(errMessage);
        }

        if(num == ''){
          const errMessage = `[ERROR] 적절하지 않은 입력 값(No Number Following Separator: ${splitArr})`;
          throw new Error(errMessage);
        }
        
        if(isNaN(num)) {
          const errMessage = `[ERROR] 적절하지 않은 입력 값(Not Number: ${num})`;
          throw new Error(errMessage);
        }

        const parsedNum = parseFloat(num);

        if(parsedNum < 0) {
          const errMessage = `[ERROR] 적절하지 않은 입력 값(Negative Number: ${parsedNum})`;
          throw new Error(errMessage);
        }

        return parsedNum;
      });

      const result = +(numbers.reduce((acc, cur) => acc + cur, 0)).toFixed(12);

      const message = `결과 : ${result}`;

      Console.print(message);

    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;

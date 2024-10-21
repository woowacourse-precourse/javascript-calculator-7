import { Console } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print()

class App {
  async run() {
    try{
      let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

      const separator = [',', ':'];
  
      while(input.match(/^\/\//g)) {
        if(input.match(/\/\/(.)\\n/)) {
          const match = input.match(/\/\/(.)\\n/);
          const customSep = match[1];
          separator.push(customSep);
          input = input.substr(match[0].length);
        } else {
          // Error 처리
        }
      }

      const separatorRegex = new RegExp(`[${separator.join('')}]`);
      const splitArr = input.split(separatorRegex);

      const numbers = splitArr.map(num => {
        if(isNaN(num)) {
          const errMessage = `[ERROR] 적절하지 않은 입력 값(Not Number: ${num})`;
          throw new Error(errMessage);
        }

        const parsedNum = parseFloat(num);

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

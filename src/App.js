import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    const result = sumNumbers(input);
    Console.print(`결과 : ${result}`);
  }
}

    function sumNumbers(input){

      if (input === "") {
        return 0;
    }

    let customPattern = /\/\/(.+)\n/;
      if(customPattern.test(input)){
        let match = input.match(customPattern);
        let customWord = match[1]; 
        let numberPart = input.split('\n')[1];
        let numbers =  numberPart.split(new RegExp(customWord)).map(Number)
        return numbers.reduce((sum, num) => sum + num, 0);
      } else if(input.includes(",") || input.includes(":")){
        let numbers = input.split(/[,|:]/).map(Number);
        return numbers.reduce((sum, num) => sum + num, 0);
      }
      return 0;
  }

export default App;
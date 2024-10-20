import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
       const CUSTOM_DELIMITER_REGEX = /^\/\/(\D)\\n/;
      
       let delimiter;
       let str;
      const answer = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

      const match = answer.match(CUSTOM_DELIMITER_REGEX);

      if(match) {
        str = answer.replace(CUSTOM_DELIMITER_REGEX, '');
        delimiter = match[1];
      } else {
        str = answer;
        delimiter = /[,:]/;
      }

      Console.print(`delimiter : =${delimiter}= | str : ${str}`);
      const sum = str.split(delimiter)
        .reduce((total, num) => total + Number(num), 0 );

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      // reject 되는 경우
      Console.print(`에러 발생: ${error.message}`);
    }
  }
}

export default App;
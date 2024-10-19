import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = ',:';
    let number = [];
    let sum = 0;

    function checkIsCorrectChar(data) {
      for (let i = 0; i < data.length; i++) {
        if (!parseInt(data[i], 10) && !separator.includes(data[i])) {
          throw new Error('[ERROR] 숫자 및 구분자가 아닌 값을 사용하고 있습니다');
        }
      }

      return true;
    };

    function getCustomSeparator(data) {

      // \n이 커스텀 구분자 설정이 아닌 용도로 사용된 경우
      if (!data.startsWith('//')) {
        throw new Error('[ERROR] 숫자 및 구분자가 아닌 값을 사용하고 있습니다');
      };

      // 커스텀 문자가 한 글자가 아닌 경우
      if (data.length != 3) {
        throw new Error('[ERROR] 잘못된 커스텀 구분자입니다. 커스텀 구분자는 한 개의 문자만 설정 가능합니다.');
      }

      // 숫자를 커스텀 문자로 사용하려는 경우
      if (parseInt(data[2], 10)) {
        throw new Error('[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.');
      }

      separator += data[2]; 
      return true;
    };

    function getNumberFromData (data) {
      if (data.length == 0) {
        return true;
      }

      const regex = new RegExp(`[${separator}]`);
      number = data.split(regex);

      for (let i = 0; i < number.length; i++) {
        if (checkIsCorrectChar(number[i])) {
          if (number[i].length == 0) {
            continue;
          }
          sum += parseInt(number[i], 10);
        }
      }
    };

    const data = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if (data.includes('\\n')) {
      const partsOfData = data.split('\\n');
      getCustomSeparator(partsOfData[0]);     
      getNumberFromData(partsOfData[1]);
    } else {
      getNumberFromData(data);
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;

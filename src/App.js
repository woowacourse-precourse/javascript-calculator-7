import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = ',:';
    let number = [];
    let sum = 0;

    function getCustomSeparator(data) {
      if (!data.startsWith('//')) return;
      separator += data[2]; 
    }

    function getNumberFromData (data) {
      const regex = new RegExp(`[${separator}]`);
      number = data.split(regex);

      for(let i = 0; i < number.length; i++){
        sum += parseInt(number[i], 10);
      }
    }

    Console.print('덧셈할 문자열을 입력해 주세요.');
    const data = await Console.readLineAsync('');

    if (data.includes('\\n')) {
      const partsOfData = data.split('\\n');
      getCustomSeparator(partsOfData[0]);
      getNumberFromData(partsOfData[1]);
    }
    else {
      getNumberFromData(data);
    }

    Console.print(`결과 : ${sum}`);

    
  }
}

export default App;

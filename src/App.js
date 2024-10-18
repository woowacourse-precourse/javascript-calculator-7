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


    Console.print('덧셈할 문자열을 입력해 주세요.');
    const data = await Console.readLineAsync('');

    if (data.includes('\\n')) {
      const partsOfData = data.split('\\n');
      getCustomSeparator(partsOfData[0]);
      
      
    }
    else {
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;

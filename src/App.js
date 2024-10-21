import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const Console = MissionUtils.Console;
    const separators = [',', ':'];
    const banSeparators = ['', '.'];
    let isMinus = false;
    let isBigNum = false;

    let userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    while (userInput.startsWith('//')) {
      const end = userInput.indexOf('\\n');
      if (end === -1) break
      const newSeparator = userInput.slice(2, end);

      // 사용자의 의도를 해치는 경우 에러 발생
      if (banSeparators.includes(newSeparator)) {
        throw new Error(`[ERROR]: 공백과 .은 구분자로 사용할 수 없습니다.`);
      };
      if (newSeparator.trim() != '' && !isNaN(newSeparator)) {
        throw new Error(`[ERROR]: 숫자는 구분자로 사용할 수 없습니다.`);
      }

      separators.push(newSeparator);
      userInput = userInput.slice(end + 2)
    }

    if (isNaN(userInput[0])) {
      throw new Error(`[ERROR]: 입력은 숫자가 먼저 와야합니다.`);
    }

    [...userInput].forEach((char, index) => {
      if (isNaN(char) && isNaN(userInput[index - 1])) {
        throw new Error(`[ERROR]: 숫자 사이에는 한 개의 구분자만 존재해야 합니다.`);
      }
    });

    const stringNumbers = separators.reduce((acc, separator) => {
      return acc.flatMap(item => item.split(separator));
    }, [userInput]);

    const intNumbers = stringNumbers.map(num => {
      const intNum = Number(num);
      if (intNum < 0) isMinus = true;
      if (num.length >= 16) isBigNum = true;
      return intNum;
    });

    if (isMinus) {
      throw new Error("[ERROR]: 입력은 양수만 가능합니다.");
    }

    const addTwoNum = (num1, num2) => {
      let carry = 0;
      let result = '';

      while (num1.length < num2.length) num1 = '0' + num1;
      while (num2.length < num1.length) num2 = '0' + num2;

      for (let i = num1.length - 1; i >= 0; i--) {
        const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
      }

      if (carry > 0) result = carry + result;

      return result;
    }
    const resultSum = isBigNum? stringNumbers.reduce((acc, num) => addTwoNum(acc,num), '0') : intNumbers.reduce((acc, num) => acc + num, 0);

    if (isNaN(resultSum)) {
      throw new Error("[ERROR]");
    } else {
      Console.print(`결과 : ${resultSum}`);
      return
    }
  }
}

export default App;
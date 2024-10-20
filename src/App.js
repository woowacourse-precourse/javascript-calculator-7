import { Console } from "@woowacourse/mission-utils";

// 커스텀 구분자는 ","와 ":" 이기 때문에 미리 state를 해준다
const commonDelimiter = [",", ":"];

class App {
  async run() {
    const inputtedString = await Console.readLineAsync('덧셈할 문자열을 입력하세요.\n');
    const { delimiter, numbers } = splitValues(inputtedString);
    const allNumbers = splitNumbers(delimiter, numbers);
    const sum = calculate(allNumbers);
    Console.print(`결과 : ${sum}`);
  }
}

function splitValues(input) {
  if (typeof input !== 'string') {
    throw new Error('[ERROR] 입력한 값이 문자열이 아닙니다');
  }

  // 커스텀 구분자랑 같이 입력을 했으면
  if (input.startsWith('//')) {
    const { delimiter, numbers } = splitCustomDelimiter(input);
    return { delimiter, numbers };
  }

  return { delimiter: commonDelimiter, numbers: input };
}

function splitCustomDelimiter(input) {
  const lineIndex = input.indexOf('\\n');

  if (lineIndex > 2) {
    const inputtedDelimiter = input.substring(2, lineIndex);
    if (!inputtedDelimiter) {
      throw new Error('[ERROR] 구분자를 작성하지 않았습니다.');
    }

    const inputtedNumber = input.substring(lineIndex + 2);
    if (!inputtedNumber) {
      throw new Error('[ERROR] 값을 입력하지 않았습니다');
    }

    if (!inputtedNumber.includes(inputtedDelimiter)) {
      return { delimiter: commonDelimiter, numbers: inputtedNumber };
    }

    return { delimiter: inputtedDelimiter, numbers: inputtedNumber };
  } else {
    throw new Error('[ERROR] 커스텀 구분자를 작성하고 뒤에 \n를 제대로 입력하셔야 합니다');
  }
}

function splitNumbers(delimiter, numbers) {
  console.log("delimiter:", delimiter);
  console.log("numbers:", numbers);
  if (Array.isArray(delimiter)) {
    const delimiterPattern = new RegExp(`[${delimiter.join('')}]`);
    console.log('delimiterPattern:', delimiterPattern);
    return numbers.split(delimiterPattern);
  }

  return numbers.split(delimiter);
}

function calculate(values) {
  const negativeNumbers = values.filter(num => Number(num) < 0);

  if (negativeNumbers.length > 0) {
    throw new Error('[ERROR] 음수는 허용되지 않습니다');
  }

  return values.reduce((acc, num) => acc + Number(num), 0);
}

export default App;
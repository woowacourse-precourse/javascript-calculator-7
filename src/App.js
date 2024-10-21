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

// 구분자랑 숫자를 분리 시켜주는 함수
function splitValues(input) {
  if (typeof input !== 'string') {
    throw new Error('[ERROR] 입력한 값이 문자열이 아닙니다');
  }

  // 커스텀 구분자를 사용했으면
  if (input.startsWith('//')) {
    const { delimiter, numbers } = splitCustomDelimiter(input);
    return { delimiter, numbers };
  }

  return { delimiter: commonDelimiter, numbers: input };
}

// 구분자를 분리해주는 함수
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

    // //;\n9,1:3:2일 경우 (구분자 정했지만 사용하지 않고 common 구분자를 사용할 때는 구분자를 common delimiter로 정한다)
    if (!inputtedNumber.includes(inputtedDelimiter)) {
      console.log('inputted number⚡️:', inputtedNumber);
      console.log('inputtedDelimiter:', inputtedDelimiter);

      // 커스텀 구분자를 사용했지만 입력한 값은 숫자만 있을 때
      if (+inputtedNumber > 0) {
        return { delimiter: commonDelimiter, numbers: inputtedNumber };
      }
      // 입력한 값에 commonDelimiter가 존재하는지 확인하는 로직
      const isUsingCommonDelimiter = commonDelimiter.some(delim => inputtedNumber.includes(delim));

      if (!isUsingCommonDelimiter) {
        throw new Error('[ERROR] 제공된 구분자 외 다른 구분자를 사용했습니다');
      }

      return { delimiter: commonDelimiter, numbers: inputtedNumber };
    }

    return { delimiter: inputtedDelimiter, numbers: inputtedNumber };
  } else {
    throw new Error('[ERROR] 커스텀 구분자를 작성하고 뒤에 \n를 제대로 입력하셔야 합니다');
  }
}

// 숫자를 분리 해주는 함수
function splitNumbers(delimiter, numbers) {
  if (Array.isArray(delimiter)) {
    const delimiterPattern = new RegExp(`[${delimiter.join('')}]`);
    return numbers.split(delimiterPattern);
  }

  if (!numbers.includes(delimiter)) {
    throw new Error('[ERROR] 커스텀 구분자를 정해주세요');
  }

  return numbers.split(delimiter);
}

// 계산
function calculate(values) {
  const negativeNumbers = values.filter(num => Number(num) < 0);

  // 음수: 에러
  if (negativeNumbers.length > 0) {
    throw new Error('[ERROR] 음수는 허용되지 않습니다');
  }

  return values.reduce((acc, num) => acc + Number(num), 0);
}

export default App;

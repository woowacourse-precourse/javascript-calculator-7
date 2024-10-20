import { Console } from "@woowacourse/mission-utils";

// 커스텀 구분자는 ","와 ":" 이기 때문에 미리 state를 해준다
const COMMON_DELIMITER = [",", ":"];

class App {
  async run() {
    const INPUTTED_NUMBER = await Console.readLineAsync('덧셈할 문자열을 입력하세요.\n');
    const VALIDATE_RESULT = validateDelimiter(INPUTTED_NUMBER);
    const VALUES = splitNumbersUsingDelimiter(VALIDATE_RESULT.DELIMITER, VALIDATE_RESULT.INPUTTED_NUMBERS);
    const SUM = calculate(VALUES);
    Console.print(`결과: ${SUM}`);
  }
}

// 커스텀 혹은 일반 구분자를 구분하는 함수
function validateDelimiter(input) {
  if (typeof input !== 'string') {
    throw new Error('[ERROR] 입력한 값이 올바르지 않습니다');
  }

  if (input.startsWith('//')) {
    return validateCustomDelimiter(input);
  }

  return { DELIMITER: COMMON_DELIMITER, INPUTTED_NUMBERS: input };
}

// 커스텀 구분자를 분리해서 저장하는 함수
function validateCustomDelimiter(input) {
  const NEW_LINE_INDEX = input.indexOf('\\n');

  if (NEW_LINE_INDEX > 2) {
    const DELIMITER = input.substring(2, NEW_LINE_INDEX);

    if (!DELIMITER) {
      throw new Error('[ERROR] 잘못된 구분자가 입력되었습니다');
    }

    const INPUTTED_NUMBERS = input.substring(NEW_LINE_INDEX + 2);

    if (!INPUTTED_NUMBERS) {
      throw new Error('[ERROR] 입력된 숫자가 없습니다');
    }

    return { DELIMITER, INPUTTED_NUMBERS };
  } else {
    throw new Error('[ERROR] 잘못 입력된 문자열입니다.');
  }
}

// 구분자를 이용해 숫자들을 분리해주는 함수
function splitNumbersUsingDelimiter(delimiter, numbers) {

  if (typeof delimiter === 'number') {
    throw new Error('[ERROR] 입력된 구분자가 숫자면 안됩니다');
  }

  if (Array.isArray(delimiter)) {
    const DELIMITER_PATTERN = new RegExp(`[${delimiter.join('')}]`);
    return numbers.split(DELIMITER_PATTERN);
  }

  // 사용자가 입력한 구분자가 \n 뒤에 존재하지 않으면
  if (!numbers.includes(delimiter)) {
    throw new Error(`[ERROR] 입력된 숫자에 구분자 ${delimiter}가 없습니다`);
  }

  return numbers.split(delimiter);
}

// 분리된 숫자들을 더해주는 함수
function calculate(values) {
  return values.reduce((acc, num) => acc + Number(num), 0);
}

export default App;
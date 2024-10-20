import { Console } from "@woowacourse/mission-utils";

// 커스텀 구분자는 ","와 ":" 이기 때문에 미리 state를 해준다
const COMMON_DELIMITER = [",", ":"];

class App {
  async run() {
    const INPUTTED_NUMBER = await Console.readLineAsync('덧셈할 문자열을 입력하세요.\n');
    const validate = validateDelimiter(INPUTTED_NUMBER);
    const VALUES = splitNumbersUsingDelimiter(validate.DELIMITER, validate.INPUTTED_NUMBERS);
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

function

// 커스텀 구분자를 분리해서 저장하는 함수
function validateCustomDelimiter(input) {
  const NEW_LINE_INDEX = input.indexOf('\\n');

  if (NEW_LINE_INDEX > 2) {
    const DELIMITER = input.substring(2, NEW_LINE_INDEX);
    console.log('DELIMITER:', DELIMITER);

    if (!DELIMITER) {
      throw new Error('[ERROR] 잘못된 구분자가 입력되었습니다');
    }

    const INPUTTED_NUMBERS = input.substring(NEW_LINE_INDEX + 2);
    console.log('INPUTTED NUMBERS:', INPUTTED_NUMBERS);

    if (!INPUTTED_NUMBERS) {
      throw new Error('[ERROR] 입력된 숫자가 없습니다');
    }

    if (!INPUTTED_NUMBERS.includes(DELIMITER)) {
      return { COMMON_DELIMITER, INPUTTED_NUMBERS };
    }

    return { DELIMITER, INPUTTED_NUMBERS };
  } else {
    throw new Error('[ERROR] 잘못 입력된 문자열입니다.');
  }
}

// 구분자를 이용해 숫자들을 분리해주는 함수
function splitNumbersUsingDelimiter(delimiter, numbers) {
  if (delimiter === undefined) {
    delimiter = COMMON_DELIMITER;
  }

  let DELIMITER_PATTERN;

  if (Array.isArray(delimiter)) {
    DELIMITER_PATTERN = new RegExp(`[${delimiter.join('')}]`);
    return numbers.split(DELIMITER_PATTERN);
  }

  return [numbers];
}

// 분리된 숫자들을 더해주는 함수
function calculate(values) {
  return values.reduce((acc, num) => acc + Number(num), 0);
}

export default App;
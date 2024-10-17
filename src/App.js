import { Console } from "@woowacourse/mission-utils";

const COMMON_DELIMITER = [",", ":"];

class App {
  async run() {
    const INPUTTED_NUMBER = await Console.readLineAsync('덧셈할 문자열을 입력하세요.\n');
    const VALIDATED_RESULT = validateDelimiter(INPUTTED_NUMBER);
    Console.print('🩷:', VALIDATED_RESULT);
    const VALUES = splitNumbersUsingDelimiter(VALIDATED_RESULT.DELIMITER, VALIDATED_RESULT.INPUTTED_NUMBERS);
    const SUM = calculate(VALUES);
    Console.print(`결과: ${SUM}`);
  }
}

// 커스텀 혹은 일반 구분자를 구분하는 함수
function validateDelimiter(input) {
  // 입력한 값이 문자열이 아닌 경우 ERROR
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
    const INPUTTED_NUMBERS = input.substring(NEW_LINE_INDEX + 2);
    return { DELIMITER, INPUTTED_NUMBERS };
  } else {
    throw new Error('[ERROR] 잘못 입력된 문자열입니다.');
  }
}

// 구분자를 이용해 숫자들을 분리해주는 함수
function splitNumbersUsingDelimiter(delimiter, numbers) {
  Console.print(numbers);
  if (Array.isArray(delimiter)) {
    const delimiterPattern = new RegExp(`[${delimiter.join('')}]`);
    return numbers.split(delimiterPattern);
  }
  return numbers.split(delimiter);
}

// 분리된 숫자들을 더해주는 함수
function calculate(values) {
  return values.reduce((acc, num) => acc + Number(num), 0);
}

export default App;
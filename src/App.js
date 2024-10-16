import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUTTED_NUMBER = await Console.readLineAsync('덧셈할 문자열을 입력하세요.\n');
    const VALIDATED_RESULT = validateCustomDelimiter(INPUTTED_NUMBER);
    console.log('returned values: ', VALIDATED_RESULT);
    const VALUES = splitNumbersUsingDelimiter(VALIDATED_RESULT.CUSTOM_DELIMITER, VALIDATED_RESULT.INPUTTED_NUMBERS);
    console.log('ALL VALUES:', VALUES);
  }
}

function validateCustomDelimiter(input) {
  // 입력한 값이 문자열이 아닌 경우에 error 처리
  if (typeof input !== 'string') {
    throw new Error('[ERROR] 입력한 값이 문자열이 아닙니다');
  }
  if (input.startsWith('//')) {
    const NEW_LINE_INDEX = input.indexOf('\\n'); // get the index of the \n
    if (NEW_LINE_INDEX > 2) {
      const CUSTOM_DELIMITER = input.substring(2, NEW_LINE_INDEX);
      console.log(CUSTOM_DELIMITER);
      const INPUTTED_NUMBERS = input.substring(NEW_LINE_INDEX + 2);
      return { CUSTOM_DELIMITER, INPUTTED_NUMBERS };
    } else {
      throw new Error('[ERROR] 잘못 입력된 문자열입니다.');
    }
  } else {
    return validateCommonDelimiter(input);
  }
}

function validateCommonDelimiter(input) {
  return input;
}

function splitNumbersUsingDelimiter(delimiter, numbers) {
  return numbers.split(delimiter);
}

export default App;
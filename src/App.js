import { Console } from '@woowacourse/mission-utils';

function isInputEmpty(input) {
  if (input === '') {
    return true;
  }
  return false;
}

function isInvalidInput(input) {
  if (input === null) {
    throw new Error('[ERROR] null은 입력값이 될 수 없습니다.');
  }
  if (input === undefined) {
    throw new Error('[ERROR] undefined는 입력값이 될 수 없습니다.');
  }
}

function hasCustomSeparator(input) {
  if (input.startsWith('//')) {
    const separatorIndex = input.indexOf('\\n');

    if (separatorIndex === -1) {
      throw new Error('[ERROR] 커스텀 구분자 양식은 \\n을 반드시 포함해야 합니다.');
    }

    if (separatorIndex === 2) {
      throw new Error('[ERROR] 커스텀 구분자로 설정할 문자가 반드시 포함되어 있어야 합니다.');
    }

    if (separatorIndex !== input.lastIndexOf('\\n')) {
      throw new Error('[ERROR] 커스텀 구분자 양식에서 \\n은 반드시 하나만 있어야 합니다.');
    }

    return true;
  }

  if (input.includes('\\n')) {
    throw new Error('[ERROR] 커스텀 구분자 양식은 반드시 //로 시작해야 합니다');
  }

  return false;
}

function extractCustomSeparator(input) {
  return [input.slice(input.indexOf('\\n') + 2), input.match(/\/\/(.*?)\\n/)[1]];
}

function splitInputBySeparators(input, separators) {
  const separateRegExp = new RegExp(
    separators.map((separator) => separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
    'g',
  );

  return input.split(separateRegExp);
}

function validateInput(inputArray) {
  if (inputArray[0] === ' ' && inputArray[inputArray.length - 1] === ' ') {
    throw new Error('[ERROR] 앞과 뒤에 공백을 입력할 수 없습니다.');
  }

  if (inputArray[0] === '' && inputArray[inputArray.length - 1] === '') {
    throw new Error('[ERROR] 구분자는 숫자 사이에만 입력되어야 합니다.');
  }

  inputArray.forEach((item) => {
    if (item !== item.trim()) {
      throw new Error('[ERROR] 숫자 앞뒤에 공백을 포함하여 입력하면 안됩니다.');
    }

    if (item === '') {
      throw new Error('[ERROR] 구분자는 숫자 사이에 한 번만 입력되어야 합니다.');
    }

    const num = Number(item);
    if (Number.isNaN(num)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력하면 안됩니다.');
    }

    if (num < 0) {
      throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
    }
  });

  return true;
}

function convertStringArrayToNumberArray(stringArray) {
  return stringArray.map(Number);
}

class App {
  async run() {
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if (isInputEmpty(input)) {
      return Console.print('결과: 0');
    }

    isInvalidInput(input);

    const separators = [',', ':'];

    if (hasCustomSeparator(input)) {
      const [slicedInput, customSeparator] = extractCustomSeparator(input);
      input = slicedInput;
      separators.push(customSeparator);

      if (isInputEmpty(input)) {
        return Console.print('결과 : 0');
      }
    }

    const splitedInputArray = splitInputBySeparators(input, separators);

    if (validateInput(splitedInputArray)) {
      const numberArray = convertStringArrayToNumberArray(splitedInputArray);
      const sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue);
      const result = Number.isInteger(sum) ? sum : sum.toFixed(5);

      return Console.print(`결과 : ${result}`);
    }
  }
}

export default App;

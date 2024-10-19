import { Console } from '@woowacourse/mission-utils';

const getInput = async () =>
  Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

const processInput = async (str) => {
  const sepArr = [',', ':'];

  if (str.startsWith('/')) {
    const separator = extractCustomSeparator(str);
    if (separator !== null) {
      const customSepArr = [...sepArr, separator];
      const arr = splitAndValidateNumbers(str, customSepArr);
      if (arr !== null) return sumNumbers(arr);
      throw new Error('[ERROR]');
    }
    throw new Error('[ERROR]');
  }

  const arr = splitAndValidateNumbers(str, sepArr);
  if (arr !== null) return sumNumbers(arr);
  throw new Error('[ERROR]');
};

const extractCustomSeparator = (str) => {
  const customSet = str.slice(0, 5); // 커스텀 구분자 지정 문자열
  if (customSet[1] === '/' && customSet[3] === '\\' && customSet[4] === 'n') {
    return customSet[2];
  }
  return null;
};

const splitAndValidateNumbers = (str, sepArr) => {
  const regex = new RegExp(`[${sepArr.join('')}]`);
  const checkExclude = new RegExp(`[^0-9${sepArr.join('')}]`);
  const inputStr = sepArr.length === 3 ? str.slice(5) : str;

  if (!checkExclude.test(inputStr)) {
    return inputStr.split(regex);
  }
  throw new Error('[ERROR]');
};

const sumNumbers = (arr) => arr.reduce((result, e) => result + parseInt(e), 0);

class App {
  async run() {
    const input = await getInput();
    const result = await processInput(input);
    Console.print('결과 : ' + result);
  }
}

export default App;

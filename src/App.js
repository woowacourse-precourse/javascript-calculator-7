import { Console } from '@woowacourse/mission-utils';

const getInput = async () =>
  Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

const processInput = async (str) => {
  if (str === '') return 0;
  const sepArr = [',', ':'];

  const arr = splitAndValidateNumbers(str, sepArr);
  if (arr !== null) return sumNumbers(arr);
  throw new Error('[ERROR]');
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

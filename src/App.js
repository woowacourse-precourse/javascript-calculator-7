import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_INFO_MESSAGE = '문자열을 입력해주세요.'
const ERROR_MESSAGE = '[ERROR]';

async function getUserInput() {
  return await MissionUtils.Console.readLineAsync(INPUT_INFO_MESSAGE);
}

function getStringifiedString(str) {
  return JSON.stringify(str);
}

function getSum(numberArray) {
  return numberArray.reduce((prev, cur) => prev + cur, 0);
}
function printResult(str) {
  MissionUtils.Console.print(`결과 : ${str}`);
}

function checkTheNumberArray(array) {
  for (const item of array) {
    if (item === '') continue;
    if (isNaN(item) || Number(item) <= 0) throw new Error(ERROR_MESSAGE);
  }
}


class App {
  defaultSeparator = ',:';
  customSeparatorRegExr = /\/\/.+\\n/;
  async run() {
    const userInput = await getUserInput();
    const stringifiedUserInput = getStringifiedString(userInput);
    const { separator, newUserInput } = this.getSeparator(stringifiedUserInput);
    const separatorRegExp = this.getSeparatorRegExp(separator);

    const separatedUserInput = newUserInput.split(separatorRegExp);

    checkTheNumberArray(separatedUserInput);

    const separatedUserInputsNumberArray = separatedUserInput.map(it =>
      Number(it),
    );

    const sumOfUserInput = getSum(separatedUserInputsNumberArray);

    printResult(sumOfUserInput);
  }
  
  
  getSeparator(str) {
    const customSeparatorMatchedString = str.match(this.customSeparatorRegExr);
    if (customSeparatorMatchedString)
      return {
        separator: customSeparatorMatchedString[0]
          .slice(2, -2)
          .replace('\\', '\\\\'),
        newUserInput: str.slice(customSeparatorMatchedString[0].length + 1, -1),
      };
    return {
      separator: this.defaultSeparator,
      newUserInput: str.slice(1, -1),
    };
  }
  getSeparatorRegExp(separator) {
    return new RegExp(`[${separator}]`);
  }
}

export default App;

import { Console } from "@woowacourse/mission-utils";

const DEFAULT_SEPARATORS = [',', ':'];
const DEFAULT_ELEMENTS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ...DEFAULT_SEPARATORS];

const checkCustom = (line) => line.split('').some((char) => !DEFAULT_ELEMENTS.includes(char));

const checkMaximumLength = (line) => {
  if (line.length > 15) throw('[Error] 최대 글자 제한인 15자를 초과하였습니다.');
}

const checkSlashStart = (line) => {
  if (!line.startsWith('//')) throw('[Error] 커스텀 구분자를 잘못 사용하였습니다.');
}

const checkBackslashN = (line) => {
  if (!line.includes('\\n')) throw('[Error] 커스텀 구분자를 잘못 사용하였습니다.');
}

const check = (line, isCustomed) => {
  checkMaximumLength(line);

  if (isCustomed) {
    checkSlashStart(line);
    checkBackslashN(line);
  }
}

const customParse = (str, isCustomed) => isCustomed ? [str.substring(5), str.substr(2, 1)] : [str, null];

const separate = (str, sep) => sep.reduce((acc, cur) => acc.replaceAll(cur, ','), str).split(',').map(Number);

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

class App {
  async run() {
    const separators = [...DEFAULT_SEPARATORS];

    const line = await Console.readLineAsync('');
    const isCustomed = checkCustom(line);
    check(line, isCustomed);

    const [parsedLine, customSeparator] = customParse(line, isCustomed);
    separators.push(customSeparator);

    const numbers = separate(parsedLine, separators);
    const result = sum(numbers);

    Console.print(result);
  }
}

export default App;

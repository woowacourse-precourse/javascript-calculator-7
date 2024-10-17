import { Console } from "@woowacourse/mission-utils";

const DEFAULT_SEPARATORS = [',', ':'];
const DEFAULT_ELEMENTS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ...DEFAULT_SEPARATORS];

const checkMaximumLength = (line) => {
  if (line.length > 15) throw('[Error] 최대 글자 제한인 15자를 초과하였습니다.');
}

const checkDoubleSlashStart = (str) => {
  if (!str.startsWith('//')) throw('[Error] 커스텀 구분자를 잘못 사용하였습니다. (//로 시작해야 함)');
}

const checkBackslashNEnd = (str) => {
  if (!str.endsWith('\\n')) throw('[Error] 커스텀 구분자를 잘못 사용하였습니다. (\\n으로 끝나야 함)');
}

const checkIncludeInvalidCharacter = (str, sep) => {
  if (str.split('').some((char) => isNaN(char) && !sep.includes(char))) {
    throw('[Error] 잘못된 문자가 포함되어 있습니다.')
  };
}

const checkLine = (line) => {
  checkMaximumLength(line);
}

const checkCustomPart = (str) => {
  checkDoubleSlashStart(str);
  checkBackslashNEnd(str);
}

const checkLinePart = (str, sep) => {
  checkIncludeInvalidCharacter(str, sep);
}

const checkIsNormal = (line) => !line.split('').some((char) => !DEFAULT_ELEMENTS.includes(char));

const divideCustom = (str) => [str.substring(0, 5), str.substring(5)];

const separate = (str, sep) => sep.reduce((acc, cur) => acc.replaceAll(cur, ','), str).split(',').map(Number);

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

class App {
  async run() {
    const separators = [...DEFAULT_SEPARATORS];

    const line = await Console.readLineAsync('');
    checkLine(line);
    
    if (checkIsNormal(line)) {
      const numbers = separate(line, separators);
      const result = sum(numbers);

      Console.print(result);
      return;
    }

    const [customPart, linePart] = divideCustom(line);
    checkCustomPart(customPart);

    separators.push(customPart[2]);
    checkLinePart(linePart, separators);

    const numbers = separate(linePart, separators);
    const result = sum(numbers);

    Console.print(result);
    return;
  }
}

export default App;

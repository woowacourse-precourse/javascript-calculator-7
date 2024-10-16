import { Console } from "@woowacourse/mission-utils";

const DEFAULT_SEPARATORS = [',', ':'];

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const separate = (str, sep) => sep.reduce((acc, cur) => acc.replaceAll(cur, ','), str).split(',').map(Number);

const customParse = (str) => str.includes('//') ? [str.substring(5), str.substr(2, 1)] : [str, null];

const checkMaximumLength = (line) => {
  if (line.length > 15) throw('[Error] 최대 글자 제한인 15자를 초과하였습니다.');
}


const check = (line) => {
  checkMaximumLength(line);
}

class App {
  async run() {
    const separators = [...DEFAULT_SEPARATORS];

    const line = await Console.readLineAsync('');
    check(line);

    const [parsedLine, customSeparator] = customParse(line);
    separators.push(customSeparator);

    const numbers = separate(parsedLine, separators);
    const result = sum(numbers);

    Console.print(result);
  }
}

export default App;

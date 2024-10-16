import { Console } from "@woowacourse/mission-utils";

const DEFAULT_SEPARATORS = [',', ':'];

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const parse = (str, sep) => sep.reduce((acc, cur) => acc.replaceAll(cur, ','), str).split(',').map(Number);

const customChecked = (str) => str.includes('//') ? [str.substring(5), str.substr(2, 1)] : [str, null];

class App {
  async run() {
    const separators = [...DEFAULT_SEPARATORS];

    const line = await Console.readLineAsync('');
    const [checkedLine, customSeparator] = customChecked(line);
    separators.push(customSeparator);

    const numbers = parse(checkedLine, separators);
    const result = sum(numbers);

    Console.print(result);
  }
}

export default App;

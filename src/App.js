import { Console } from "@woowacourse/mission-utils";

const separators = [',', ':'];

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const parse = (line) => separators.reduce((acc, cur) => acc.replaceAll(cur, ','), line).split(',').map(Number);

class App {
  async run() {
    const line = await Console.readLineAsync('');
    const numbers = parse(line);
    const result = sum(numbers);

    Console.print(result);
  }
}

export default App;

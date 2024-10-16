import { Console } from "@woowacourse/mission-utils";

const separators = [',', ':'];

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const parse = (line) => {
  line += ',';
  let buffer = '';
  const numbers = [];

  for (let i = 0; i < line.length; i += 1) {
    if (separators.includes(line[i])) {
      numbers.push(Number(buffer));
      buffer = '';
      continue;
    }

    if (i == line.length - 1) {
      numbers.push(Number(buffer));
      continue;
    }

    buffer += line[i];
  }

  return numbers;
}

class App {
  async run() {
    const line = await Console.readLineAsync('');
    const numbers = parse(line);
    const result = sum(numbers);

    Console.print(result);
  }
}

export default App;

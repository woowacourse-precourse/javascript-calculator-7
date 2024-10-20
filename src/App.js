import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DELIMITER = /[,|:]/;

function parseDelimitersAndNumbers(inputString) {
  let delimiters = DEFAULT_DELIMITER;
  let numberString = inputString;

  if (numberString.startsWith("//")) {
    const customDelimiter = numberString.split('\\n');
    if (customDelimiter.length > 1 && customDelimiter[0].startsWith('//')) {
      delimiters = new RegExp(`[${customDelimiter[0].slice(2)}]`);
      numberString = customDelimiter[1];
    }
  }

  return { delimiters, numberString };
}

function parseToNumbers(stringArray) {
  return stringArray.map((word) => {
    const number = Number(word);
    if (isNaN(number)) {
      throw new Error("[ERROR]");
    }
    return number;
  });
}

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

class App {
  async run() {
    Console.print("덧셈할 문자를 입력해 주세요.");
    const inputString = await Console.readLineAsync("");
    const cleanedInput = inputString.replace(/"/g, "").trim();

    const { delimiters, numberString } = parseDelimitersAndNumbers(cleanedInput);

    const wordsArray = numberString.split(delimiters);
    const numbersArray = parseToNumbers(wordsArray);

    const negativeNumbers = numbersArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error("[ERROR]");
    }

    const result = sum(numbersArray);
    Console.print(`결과 : ${result}`);
  }
}

export default App;

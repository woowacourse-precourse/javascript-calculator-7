import { Console } from "@woowacourse/mission-utils";

const CUSTOM_DELIMITER_PATTERN = /^\/\/(.)\\n/;

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    let numbers = [];
    let delimiters = [",", ":"];

    if (input === "") {
      Console.print("결과 : 0");
      return;
    }

    const modifiedInput = this.findCustomDelimiters(input, delimiters);

    const splitedInput = this.splitInput(modifiedInput, delimiters);

    this.pushNumbers(splitedInput, numbers);

    const sum = this.calculator(numbers);

    Console.print(`결과 : ${sum}`);
  }

  isNaturalNumber(value) {
    return value > 0 && Number.isInteger(value);
  }

  calculator(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  findCustomDelimiters(input, delimiters) {
    let modifiedInput = input;

    while (true) {
      let match = modifiedInput.match(CUSTOM_DELIMITER_PATTERN);

      if (!match) {
        break;
      }

      const customDelimiter = match[1];
      delimiters.push(customDelimiter);
      const matchIndex = match.index;
      
      modifiedInput = this.RemoveCustomDelimiters(modifiedInput,matchIndex);
    }

    return modifiedInput;
  }
  
  RemoveCustomDelimiters(modifiedInput, matchIndex)
  {
    const beforePattern = modifiedInput.slice(0, matchIndex);
    const afterPattern = modifiedInput.slice(matchIndex + 5);
    const removedInput = beforePattern + afterPattern;

    return removedInput;
  }


  splitInput(modifiedInput, delimiters) {
    let splitedInput = [modifiedInput];

    delimiters.forEach((delimiter) => {
      splitedInput = splitedInput.flatMap((part) => part.split(delimiter));
    });

    return splitedInput;
  }

  pushNumbers(splitedInput, numbers) {
    splitedInput.forEach((numStr) => {
      if (numStr === "") {
        throw new Error("[ERROR]: 구분자는 연속으로 올 수 없습니다.");
      }
      const num = Number(numStr);
      if (this.isNaturalNumber(num)) {
        numbers.push(num);
      } else if (numStr !== "") {
        throw new Error("[ERROR]: 유효하지 않은 문자열 입력입니다.");
      }
    });
  }
}

export default App;

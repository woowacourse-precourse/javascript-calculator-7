const { Console } = require("@woowacourse/mission-utils");

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

    let numbers = [];
    let delimiters = [",", ":"];

    this.classifyCharacters(input, numbers, delimiters);

    const sum = this.calculator(numbers);

    Console.print(`결과 : ${sum}`);
  }

  classifyCharacters(input, numbers, delimiters) {
    const chars = input.split("");

    for (let i = 0; i < chars.length; i++) {
      if (this.isNaturalNumber(Number(chars[i]))) {
        numbers.push(Number(chars[i]));
      } else if (delimiters.includes(chars[i])) {
        continue;
      } else if (chars[i] === "/") {
        this.extrackDelimiter(chars.slice(i, i + 5), delimiters);
        i += 4;
      } else {
        throw new Error("[ERROR]: 유효하지 않은 문자열 입력");
      }
    }
  }

  isNaturalNumber(value) {
    return value > 0 && Number.isInteger(value);
  }

  extrackDelimiter(slicedchars, delimiters) {
    console.log(slicedchars);
    if (
      slicedchars[0] == "/" &&
      slicedchars[1] == "/" &&
      slicedchars[3] == "\\" &&
      slicedchars[4] == "n"
    ) {
      delimiters.push(slicedchars[2]);
    }
  }

  calculator(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;

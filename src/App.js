import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getInput();
    const { inputString, delimiters } = this.splitInput(input);
    if (inputString === "0") {
      MissionUtils.Console.print("결과 : 0");
      return;
    }
    const numbers = this.validateInput(inputString, delimiters);
    console.log(numbers);
  }

  async getInput() {
    return await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
  }

  splitInput(inputString) {
    if (!inputString) return { inputString: "0", delimiters: [] };

    const delimiters = [",", ":"];

    if (inputString.startsWith("//")) {
      if (inputString[3] === "\\" && inputString[4] === "n") {
        const customDelimiter = inputString[2];
        delimiters.push(customDelimiter);
        inputString = inputString.slice(5);
      } else {
        throw new Error(
          "[ERROR] 올바르지 않은 형식입니다. 입력 값을 다시 확인해주세요."
        );
      }
    }

    return { inputString, delimiters };
  }

  validateInput(input, delimiters) {
    for (const delimiter of delimiters) {
      input = input.split(delimiter).join(",");
    }

    const numbers = input.split(",").map(Number);

    for (const num of numbers) {
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자와 구분자만 입력 가능합니다.");
      }
      if (num < 0) {
        throw new Error("[ERROR] 양수만 입력 가능합니다.");
      }
    }
    return numbers;
  }
}

export default App;

// import { MissionUtils } from "@woowacourse/mission-utils";

// class App {
//   async run() {
//     const input = await this.getInput();
//     const { inputString, delimiters } = this.splitInput(input);

//     if (inputString === "0") {
//       MissionUtils.Console.print("결과 : 0");
//       return;
//     }

//     const numbers = this.validateInput(inputString, delimiters);
//     const result = this.sumNumbers(numbers);
//     this.printResult(result);
//   }

//   async getInput() {
//     return await MissionUtils.Console.readLineAsync(
//       "덧셈할 문자열을 입력해 주세요."
//     );
//   }

//   splitInput(inputString) {
//     if (!inputString) return { inputString: "0", delimiters: [] };

//     const delimiters = [",", ":"];

//     if (inputString.startsWith("//")) {
//       if (inputString[3] === "\\" && inputString[4] === "n") {
//         const customDelimiter = inputString[2];
//         delimiters.push(customDelimiter);
//         inputString = inputString.slice(5);
//       } else {
//         throw new Error(
//           "[ERROR] 올바르지 않은 형식입니다. 입력 값을 다시 확인해주세요."
//         );
//       }
//     }

//     return { inputString, delimiters };
//   }

//   sumNumbers(numbers) {
//     let sum = 0;

//     for (const num of numbers) {
//       sum += num;
//     }

//     return sum;
//   }

//   validateInput(input, delimiters) {
//     for (const delimiter of delimiters) {
//       input = input.split(delimiter).join(",");
//     }

//     const numbers = input.split(",").map(Number);

//     for (const num of numbers) {
//       if (isNaN(num)) {
//         throw new Error("[ERROR] 숫자와 구분자만 입력 가능합니다.");
//       }
//       if (num < 0) {
//         throw new Error("[ERROR] 양수만 입력 가능합니다.");
//       }
//     }
//     return numbers;
//   }

//   printResult(result) {
//     MissionUtils.Console.print(`결과 : ${result}`);
//   }
// }

// export default App;

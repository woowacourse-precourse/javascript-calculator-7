import Console from "./Console.js";

function add(input) {
  try {
    if (input === "") {
      return 0;
    }

    let delimiter = /[,:]/;
    let numbersString = input;

    if (input.startsWith("//")) {
      const parts = input.split("\n");
      if (parts.length < 2) {
        throw new Error("[ERROR] 잘못된 입력 형식입니다.");
      }
      const customDelimiter = parts[0].substring(2);
      delimiter = new RegExp(`[${customDelimiter}]`);
      numbersString = parts[1];
    }

    const numbers = numbersString.split(delimiter);
    const sum = numbers.reduce((total, current) => {
      const num = parseInt(current, 10);
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
      }
      return total + num;
    }, 0);

    return sum;
  } catch (error) {
    Console.print(error.message);
    return;
  }
}
async function askForInput() {
  try {
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. "
    );
    if (userInput.toLowerCase() === "종료") {
      Console.print("프로그램을 종료합니다.");
    } else {
      Console.print(`결과 : ${add(userInput)}`);
      await askForInput();
    }
  } catch (error) {
    Console.print(error.message);
  }
}

async function run() {
  await askForInput();
}

export { run };

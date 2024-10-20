import { Console } from "@woowacourse/mission-utils";

function add(input) {
  if (input === "") {
    return 0;
  }

  let delimiter = /[,:]/;
  let numbersString = input;

  if (input.startsWith("//")) {
    const parts = input.split("\n");
    if (parts.length < 2) {
      throw new Error("[ERROR]");
    }
    const customDelimiter = parts[0].substring(2);
    delimiter = new RegExp(`[${customDelimiter}]`);
    numbersString = parts[1];
  }

  const numbers = numbersString.split(delimiter);
  const sum = numbers.reduce((total, current) => {
    const num = parseInt(current, 10);
    if (isNaN(num)) {
      throw new Error("[ERROR]");
    }
    return total + num;
  }, 0);

  return sum;
}

async function askForInput() {
  try {
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
    if (userInput.toLowerCase() === "종료") {
      Console.print("ERROR");
      process.exit(0);
    } else {
      Console.print(`결과 : ${add(userInput)}`);
      await askForInput();
    }
  } catch (error) {
    Console.print("[ERROR]");
    process.exit(1);
  }
}

async function run() {
  await askForInput();
}

export { run };

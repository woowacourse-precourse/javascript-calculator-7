import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const result = extractSeperator(userInput);

      MissionUtils.Console.print("결과 : " + result);
    } catch (error) {
      throw new Error("[ERROR] This is an error.", error);
    }
  }
}

function extractSeperator(userInput) {
  if (typeof userInput !== "string") {
    throw new Error("[ERROR] not string data type");
  }

  const REGEX = /\/\/(.+)\\n/;

  if (userInput.includes(",") || userInput.includes(":")) {
    const _numbers = cutSeperator(userInput);
    const numbers = _numbers.map(Number);
    if (numbers.some((number) => Number.isNaN(number) || number < 0)) {
      throw new Error("[ERROR] This is an error.");
    }
    return sum(numbers);
  }

  if (userInput.startsWith(`//`) && userInput.match(REGEX)) {
    const _numbers = extractCharacter(userInput);
    const numbers = _numbers.map(Number);
    if (numbers.some((number) => Number.isNaN(number) || number < 0)) {
      throw new Error("[ERROR] This is an error.");
    }
    return sum(numbers);
  }

  throw new Error("[ERROR] This is an error.");
}

function cutSeperator(string) {
  const stringBySeperator1 = string.split(",");
  const numbers = stringBySeperator1.map((x) => x.split(":")).flat();
  return numbers;
}

function extractCharacter(string) {
  const REGEX = /\/\//;

  const seperator = string.split("\\n")[0].replace(REGEX, "");
  const customString = string.split("\\n")[1];

  const numbers = customString.split(seperator);

  return numbers;
}

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

export default App;

import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    getString();

    async function getString() {
      try {
        const userInput = await MissionUtils.Console.readLineAsync(
          "덧셈할 문자열을 입력해 주세요.\n"
        );

        const result = extractSeperator(userInput);

        MissionUtils.Console.print("결과 : " + result);
      } catch (error) {
        // reject 되는 경우
      }
    }
  }
}

function extractSeperator(userInput) {
  if (typeof userInput !== "string") {
    throw new Error("not string data type");
  }

  const REGEX = /\/\/(.)\\n/;

  if (userInput.includes(",") || userInput.includes(":")) {
    return cutSeperator(userInput);
  } else if (userInput.startsWith(`//`) && userInput.match(REGEX)) {
    const numbers = extractCharacter(userInput);
    return sumNumbers(numbers);
  } else {
    return "error";
  }
}

function cutSeperator(string) {
  return ",";
}

function extractCharacter(string) {
  const REGEX = /\/\/(.)/;

  const seperator = string.match(REGEX)[1];

  const customString = string.split("\\n")[1];
  const numbers = customString.split(seperator);

  return numbers;
}

function sumNumbers(numbers) {
  return 1;
}

export default App;

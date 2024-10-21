const { Console } = require("@woowacourse/mission-utils");

const sum = (input) => {
  // 기본 구분자 설정
  let delimiters = [",", ":"];
  let numbers = [];

  // 커스텀 구분자 확인
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    if (delimiterEndIndex === -1) {
      throw new Error("Invalid input format");
    }

    const customDelimiter = input.substring(2, delimiterEndIndex).trim();
    delimiters.push(customDelimiter);
    input = input.substring(delimiterEndIndex + 1);
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  numbers = input.split(regex).map(Number);

  let sum = 0;
  for (const num of numbers) {
    if (isNaN(num) || num < 0) {
      throw new Error("Negative numbers are not allowed");
    }
    sum += num;
  }

  return sum;
};

const run = async () => {
  try {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const result = sum(input);
    Console.print(`결과 : ${result}`);
  } catch (error) {
    Console.print(`[ERROR] ${error.message}`);
  }
};

run();

import { Console } from "@woowacourse/mission-utils";

async function getAddInput() {
  try {
    let inputText = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return inputText;
  } catch (error) {
    let errorMessage = `[ERROR] ${error.message}`
    Console.print(errorMessage);
  }
}

export default getAddInput;
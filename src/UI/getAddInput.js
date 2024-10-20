import { Console } from "@woowacourse/mission-utils";

async function getUserInput() {
  try {
    let inputText = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');    
    return inputText;
  } catch (error) {
    let errorMessage = '입력중에 오류가 발생했습니다.'
    const ERROR = new Error(errorMessage);
    throw ERROR;
  }
}

export default getUserInput;
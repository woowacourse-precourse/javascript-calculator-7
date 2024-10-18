import { Console } from '@woowacourse/mission-utils';

export const getUserInput = async () => {
    const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return userInput;
}
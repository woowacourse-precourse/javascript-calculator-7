import { Console } from '@woowacourse/mission-utils';

export async function getInput() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    return input;
}

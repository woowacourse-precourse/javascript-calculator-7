import { Console } from '@woowacourse/mission-utils';

class User {
    async getUserInput() {
        const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

        return userInput;
    }
}

export default User;
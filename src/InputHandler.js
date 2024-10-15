import { Console } from '@woowacourse/mission-utils';

const InputHandler = {
    async getInput() {
        const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        return input.trim();
    }
};

export default InputHandler;
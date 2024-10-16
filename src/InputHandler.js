import { Console } from '@woowacourse/mission-utils';

const InputHandler = {
    async getInput() {
        const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        return this.preprocessInput(input);
    },

    preprocessInput(input) {
        // '\\n'을 '\n'으로 변환
        return input.replace('\\n', '\n').trim();
    }
};

export default InputHandler;
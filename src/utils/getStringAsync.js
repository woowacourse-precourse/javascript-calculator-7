import { MissionUtils } from '@woowacourse/mission-utils';

const getStringAsync = async () => {
    try {
        const inputValue = await MissionUtils.Console.readLineAsync(
            '덧셈할 문자열을 입력해주세요.\n'
        );
        return inputValue;
    } catch (error) {
        throw new Error('[ERROR]');
    }
};

export default getStringAsync;

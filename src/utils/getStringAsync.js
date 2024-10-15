import { MissionUtils } from '@woowacourse/mission-utils';

const getStringAsync = async () => {
    try {
        const inputValue = await MissionUtils.Console.readLineAsync(
            '덧셈할 문자열을 입력해주세요.\n'
        );
        return inputValue;
    } catch (error) {
        MissionUtils.Console.print(
            '입력을 거부하셨습니다. 애플리케이션을 종료합니다.'
        );
    }
};

export default getStringAsync;

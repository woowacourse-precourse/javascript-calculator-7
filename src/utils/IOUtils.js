import { MissionUtils } from '@woowacourse/mission-utils';

const getInput = async () => {
    const inputMessage = "덧셈할 문자열을 입력해 주세요.";
    return MissionUtils.Console.readLineAsync(inputMessage);
}

export { getInput };
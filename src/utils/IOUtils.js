import { MissionUtils } from '@woowacourse/mission-utils';

const getInput = async () => {
    const inputMessage = "덧셈할 문자열을 입력해 주세요.";
    try {
        const input = MissionUtils.Console.readLineAsync(inputMessage);
        return input;
    } catch (err) {
        throw err;
    }
}

const printOutput = (output) => {
    const outputMessage = "결과 : ";
    MissionUtils.Console.print(outputMessage + output);
}

export { getInput, printOutput };
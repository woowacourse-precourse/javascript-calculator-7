/* eslint-disable operator-linebreak */
export default function validateInputs(inputs) {
    //  입력값이 없을 때
    if (inputs === '') {
        throw new Error('[ERROR] 입력된 값이 없습니다.');
    }
    //  그냥 숫자만 입력했을 때
    const numTest = /^[0-9]+$/;
    if (numTest.test(inputs) === true) {
        return true;
    }

    //  커스텀 구분자가 있는지 확인

    if (inputs.includes('//') === true && inputs.includes('\\n') === true) {
        return true;
    }

    //  입력값에 숫자가 아닌 값 / 음수가 포함되어 있는지 확인
    inputs.split('').forEach((input) => {
        if (Number(input) < 0) {
            throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
        }
        if (
            Number.isNaN(Number(input)) === true &&
            input !== ',' &&
            input !== ':'
        ) {
            throw new Error(
                '[ERROR] 구분자가 잘못되었거나, 숫자가 아닌 값이 포함되어 있습니다.',
            );
        }
        // 구분자만 있을 때
        if (
            Number.isNaN(Number(input)) === true &&
            (input === ',' || input === ':')
        ) {
            throw new Error('[ERROR] 구분자만 입력할 수 없습니다.');
        }
    });

    if (inputs.includes('-')) {
        //  '-'가 구분자로 사용되었을 때는 정상으로 판단
        if (inputs.includes('//-\\n')) {
            return true;
        }
        //  이외의 경우 음수로 판단
        throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
    }
    return true;

    // 분리한 값 중에 음수가 있을 때
}

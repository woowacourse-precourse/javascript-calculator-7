import Calculator from '../calculation/calculator.js';

export default function splitCustom(inputs) {
    let splitedInputs = [];
    const startIdx = inputs.indexOf('//');
    const endIdx = inputs.indexOf('\\n', startIdx);
    const customDelimiter = inputs.substring(startIdx + 2, endIdx).trim();
    splitedInputs = inputs.substring(endIdx + 2).split(customDelimiter);
    // 분리했더니 커스텀 구분자랑 다른 구분자가 있는 경우 에러

    console.log(splitedInputs); // 여기서 분리가 잘 되는지 확인

    const numTest = /^[0-9]+$/;
    splitedInputs.forEach((input) => {
        if (!numTest.test(input)) {
            throw new Error(
                '[ERROR] 커스텀 구분자와 다른 구분자로는 구분할 수 없습니다.',
            );
        }
    });

    const splitedNum = splitedInputs.map((num) => Number(num));

    return Calculator(splitedNum);
}

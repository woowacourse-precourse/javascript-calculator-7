import Calculator from './calculator.js';

export default function splitCustom(inputs) {
    let splitedInputs = [];
    const startIdx = inputs.indexOf('//');
    const endIdx = inputs.indexOf('\\n', startIdx);
    const customDelimiter = inputs.substring(startIdx + 2, endIdx).trim();

    splitedInputs = inputs.substring(endIdx + 2).split(customDelimiter);

    const splitedNum = splitedInputs.map((num) => Number(num));

    return Calculator(splitedNum);
}

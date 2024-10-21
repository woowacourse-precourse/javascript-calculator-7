import Calculator from '../calculation/calculator.js';

export default function splitInputs(inputs) {
    let splitedInputs = [];
    if (inputs.includes(':') === true) {
        splitedInputs = inputs.split(':');
    } else if (inputs.includes(',') === true) {
        splitedInputs = inputs.split(',');
    }

    const splitedNum = splitedInputs.map((num) => Number(num));

    return Calculator(splitedNum);
}

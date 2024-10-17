export default function splitInputs(inputs) {
    let splitedInputs = [];
    if (inputs.includes(':') === true) {
        splitedInputs = inputs.split(':');
    } else if (inputs.includes(',') === true) {
        splitedInputs = inputs.split(',');
    }
    const splitedNum = splitedInputs.map((num) => Number(num));

    let sum = 0;
    splitedNum.forEach((n) => {
        sum += n;
    });
    return sum;
}

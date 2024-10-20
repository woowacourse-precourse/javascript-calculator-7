export default function Calculator(splitedNum) {
    let sum = 0;
    splitedNum.forEach((n) => {
        sum += n;
    });
    return sum;
}

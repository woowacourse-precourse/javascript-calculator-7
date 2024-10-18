
const sumInput = (x) => {
    let sum = 0;

    // forEach() 메서드로 간단하게 모든 배열을 순회해 더하도록 함
    x.forEach(value => sum += value);

    return sum;
}

export default sumInput;
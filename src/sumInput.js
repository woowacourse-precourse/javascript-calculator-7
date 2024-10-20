
const sumInput = (parseNum) => {
    let sum = 0;

    // forEach() 메서드로 우선 입력된 값중에 너무 큰 값이 있는지 검사하고 있다면 Error 반환
    // 통과하면 배열의 모든 수를 합산
    parseNum.forEach(value => {
        if (value > Number.MAX_SAFE_INTEGER) {
            throw new Error('[ERROR] 입력된 값들 중 너무 큰 값이 있습니다.');
        }
        sum += value;
    });

    // 마지막으로 합산된 값이 infinity를 출력할 정도로 너무 크지 않은지 검사
    if (sum > Number.MAX_SAFE_INTEGER) {
        throw new Error('[ERROR] 합산된 값이 너무 큽니다.')
    }

    return sum;
}

export default sumInput;
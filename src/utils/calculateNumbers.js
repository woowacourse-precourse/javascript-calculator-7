// 추출된 숫자들 더해주는 함수
export function calculateNumbers(numberArray) {
    let result = 0;
    for (let number of numberArray){
        result += number;
    }
    return result;
}
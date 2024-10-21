// 숫자 유효성 검증 및 변환 함수
export function validateNumber(num) {
    const parsedNum = Number(num);

    if (isNaN(parsedNum)) {
        throw new Error('[ERROR] 숫자가 아닌 값이 포함되었습니다.');
    } else if (parsedNum < 0) {
        throw new Error('[ERROR] 양수로만 이루어져야 합니다.');
    }

    return parsedNum;
}
import { parseInput } from './addFuntions/parseInput.js';
import { validateNumber } from './addFuntions/validateNumber.js';

export function add(input) {
    if (input === '') return 0;
    const { numbers, delimiter } = parseInput(input); // 입력 파싱
    const parsedNumbers = numbers
        .split(delimiter)
        .filter(num => num !== '') // 중복된 구분자 처리
        .map(validateNumber); // 숫자 유효성 검증 및 변환

    return parsedNumbers.reduce((sum, num) => sum + num, 0); // 합산
}

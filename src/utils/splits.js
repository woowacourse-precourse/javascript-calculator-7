import Errors from '../error/errors.js';

/**
 * 사용자 입력 문자열을 지정된 구분자로 나누고,
 * 오류를 검토한 후, 오류가 없을 경우 숫자 배열을 반환하는 함수입니다.
 */

function Splits(input) {
    let seperator = [',', ';'];

    let newLineIdx = input.lastIndexOf('\\n');
    let customs = newLineIdx !== -1 ? input.slice(2, newLineIdx) : null;
    if (customs) {
        seperator.push(customs);
    }

    // 문자열 구분자 기준으로 나누기
    let inputNums = newLineIdx !== -1 ? input.slice(newLineIdx + 2) : input;
    const regExp = new RegExp(
        seperator.map((s) => s.replace(/([.*+?^${}()|\[\]\\])/g, '\\$1')).join('|'),
        'g'
    );
    let numsArr = inputNums.split(regExp);

    // 오류 검토
    const validator = new Errors(input, customs, numsArr);
    validator.run();

    return numsArr.map(Number);
}
export default Splits;

/**
 * 숫자 배열을 입력받아 모든 숫자 합계를 리턴하는 함수입니다.
 */

function Calculator(nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
export default Calculator;

//숫자 배열의 합을 계산하는 함수
//@param {number[]} numbers - 합산할 숫자 배열
//@returns {number} 합계
const sumNumbers = (numbers) => numbers.reduce((sum, num) => sum + num, 0);
export default sumNumbers;

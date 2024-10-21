/**
 * 배열의 숫자 합을 계산하는 함수
 * @param {number} arr
 * @returns number
 */
const sumOfArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

export default sumOfArray;

function sumNum(numArr) {
  let answer = numArr.reduce((prev, cur) => {
    return prev + cur;
  });
  return answer;
}
export default sumNum;

function solution(array) {
  let sum = array.reduce((a, b) => Number(a) + Number(b), 0);
  return sum;
}

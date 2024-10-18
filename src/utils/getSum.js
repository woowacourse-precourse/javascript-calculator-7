// number[] => number
// 숫자들이 배열로 주어졌을 때, 숫자들의 합 계산
const getSum = (numberList) => {
  let result = 0;
  numberList.forEach((number) => {
    result += number;
  });

  return result;
};

export default getSum;

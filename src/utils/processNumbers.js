// string => number[]
// 구분자 기준으로 분류
export const seperateNumbers = (restString, seperatorJoinString) => {
  // 빈 string의 경우 빈 배열 return
  if (restString === "") {
    return [];
  }

  // 정규식 만들기
  const seperatorJoinRegex = new RegExp(seperatorJoinString);

  // 정규식 기준으로 구분
  const seperatedString = restString.split(seperatorJoinRegex);

  // string[] -> number[]
  return seperatedString.map((e) => {
    return parseInt(e);
  });
};

// number[] => number
// 숫자들이 배열로 주어졌을 때, 숫자들의 합 계산
export const getSum = (numberList) => {
  let result = 0;

  // 빈 배열을 받은 경우
  if (numberList.length === 0) {
    return result;
  }

  numberList.forEach((number) => {
    result += number;
  });

  return result;
};

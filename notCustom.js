// // \n 사이의 문자열을 출력하는 함수

function solution(message) {
  let FirstSplit = message.split(/,|:/);
  return FirstSplit;
}

console.log(solution("1,2:3"));

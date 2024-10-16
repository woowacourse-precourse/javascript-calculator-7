// // \n 사이의 문자열을 출력하는 함수

function solution(message) {
  const FirstSplit = message.split("\n")[0];
  const SecondSplit = FirstSplit.split("//")[1];
  return SecondSplit;
}

console.log(solution("//;\n1;2;3"));

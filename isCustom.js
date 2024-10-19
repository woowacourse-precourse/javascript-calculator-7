// // \n 사이의 문자열을 출력하는 함수

function solution(message) {
  let FirstIndex = message.indexOf("//");
  //
  let SecondIndex = message.indexOf("\n");

  if (FirstIndex !== -1 && SecondIndex !== -1 && FirstIndex < SecondIndex) {
    // \n 이후의 내용만 잘라서 반환
    let sliceMessage = message.slice(SecondIndex + 1);
    console.log(sliceMessage);

    // // \n 기준으로 가운데값 추출 ;
    let custom = message.slice(FirstIndex + 2, SecondIndex);
    console.log(custom);

    //
    let newArray = sliceMessage.split(custom);
    console.log(newArray);

    let sum = newArray.reduce((a, b) => Number(a) + Number(b), 0);
    return sum;
  }
}

console.log(solution("//;\n1;2;3"));

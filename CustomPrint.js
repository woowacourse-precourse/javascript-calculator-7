function solution(input) {
  if (input.includes("//") && input.includes("\n")) {
    let FirstIndex = message.indexOf("//");
    //
    let SecondIndex = message.indexOf("\n");
    // // \n 기준으로 가운데값 추출 ;
    let custom = message.slice(FirstIndex + 2, SecondIndex);
    if (custom.length === 0) {
      throw new Error("[Error] 커스텀 문자가 한개만");
    }
    console.log(custom);
    return custom;
  }
  return /,|:/;
}

export class Parse {
  // 커스텀 구분자 확인 함수
  changeToList(input) {
    let customInput = input.match(/^\/\/(.)\\n/); // ; 추출
    // 커스텀 구분자가 있는 케이스
    if (customInput) {
      const sliceInput = input.split("\\n")[1];
      customInput = customInput[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // 특수기호가 커스텀 문자일경우 / 추가
      const regexText = new RegExp(`[${customInput},:]`); // 정규식 생성
      const result = sliceInput.split(regexText);
      return this.changeFloat(result);
    }
    const regexText = /[,:]/; // 기본 구분자 설정
    return this.changeFloat(input.split(regexText));
  }

  // 소수는 소수로 정수는 정수로 형변환
  changeFloat(result) {
    const newResult = result.map((number) => {
      let preNum = parseFloat(number);
      if ((preNum * 10) % 10 == 0) {
        preNum = parseInt(preNum);
      }
      return preNum;
    });
    return newResult;
  }
}

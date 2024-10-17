export class Calculator {
  calculate(input) {
    const sliceNumbers = this.regexTest(input);
    if (sliceNumbers.length === 0) return `[결과 : 0]`;
    if (sliceNumbers.error) {
      return "[ERROR]";
    }
    return `[결과 : ${this.add(sliceNumbers.numbers)}]`;
  }

  regexTest(input) {
    if (input == "") return 0;
    if (input.length > 10000) return { error: true };

    let regexText = /[,:]/; // 기본 구분자 설정
    let result = "";

    let customInput = input.match(/^\/\/(.)\\n/); // ; 추출
    // 커스텀 구분자가 있는 케이스
    if (customInput) {
      let sliceInput = input.split("\\n")[1];
      regexText = new RegExp(`[${customInput[1]},:]`); // 정규식 생성
      result = sliceInput.split(regexText);
    } else {
      result = input.split(regexText);
    }
    // result type :  array<string>

    for (let index = 0; index < result.length; index++) {
      let preNum = parseFloat(result[index]);
      if (preNum < 0 || isNaN(preNum)) return { error: true };
    }
    result = result.map((number) => {
      let preNum = parseFloat(number);
      if ((preNum * 10) % 10 == 0) {
        preNum = parseInt(preNum);
      }
      return preNum;
    });

    return { error: false, numbers: result };
  }

  // add 함수내 파라미터를 레스트 파라미터로 설정
  add(...numbers) {
    console.log(numbers);
    let result = 0;
    numbers.forEach((number) => {
      result += number;
    });
    return result;
  }
}

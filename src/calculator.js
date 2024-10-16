class Calculator {
  constructor() {
    this.defaultDelimiters = [",", ":"];
  }

  checkDelimiter(input) {
    const customDelimiterMatch = input.match(/^\/\/(.*?)\n/); // 구분자 확인
    let delimiters = [...this.defaultDelimiters]; // 구분자 배열을 기본 구분자로 초기화

    if (customDelimiterMatch) {
      const customDelimiters = customDelimiterMatch[1].trim().split(/[,|]/); // 구분자 추출
      delimiters.push(...customDelimiters.map((delimiter) => delimiter.trim())); // 커스텀 구분자를 구분자 배열에 추가
      return { delimiters, numbers: input.split("\n").slice(1).join("\n") };
    }

    return { delimiters, numbers: input };
  }

  parseNumbers(numbers, delimiters) {
    let splitNumbers = [numbers];

    // 각 delimiter에 대해 split
    for (const delimiter of delimiters) {
      splitNumbers = splitNumbers.reduce((acc, part) => {
        return acc.concat(part.split(delimiter)); // split 배열들을 하나로 배열로 합치기
      }, []);
    }

    return splitNumbers.map((num) => {
      const number = Number(num);
      if (isNaN(number)) {
        throw new Error("계산할 수 있는 형식이 아닙니다.");
      }
      return number;
    });
  }

  checkNegativeNumbers(numArray) {
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`음수는 입력할 수 없습니다.`);
    }
  }

  calculate(input) {
    if (
      input.replaceAll(" ", "") == "" ||
      input == null ||
      input == undefined
    ) {
      throw new Error("입력된 문자열이 없습니다.");
    }

    const { delimiters, numbers } = this.checkDelimiter(input);
    const numArray = this.parseNumbers(numbers, delimiters);
    this.checkNegativeNumbers(numArray);

    return numArray.reduce((acc, cur) => acc + cur, 0);
  }
}

export default Calculator;

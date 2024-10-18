class CalculatorModel {
  constructor() {
    this.defaultSeparators = [",", ":"];
  }

  calculate(input) {
    return this.parseInput(input); // parseInput 호출
  }

  parseInput(input) {
    let separators = [...this.defaultSeparators];
    let numbersString = input;

    // 커스텀 구분자 확인
    const customSeparatorMatch = input.match(/^\/\/(.*?)\\n/);
    if (customSeparatorMatch) {
      const customSeparator = customSeparatorMatch[1].trim();
      separators.push(customSeparator);
      numbersString = input.slice(customSeparatorMatch[0].length);
    }

    const regex = new RegExp(`[${separators.join("")}]+`);
    const numbers = numbersString.split(regex).map((num) => {
      const trimmedNum = num.trim();
      const parsedNum = parseFloat(trimmedNum);

      if (isNaN(parsedNum)) {
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
      }

      if (parsedNum < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }

      return parsedNum;
    });

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);

    return sum;
  }
}
export default CalculatorModel;

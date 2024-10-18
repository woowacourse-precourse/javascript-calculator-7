class CalculatorModel {
  constructor() {
    this.defaultSeparators = [",", ":"];
  }

  calculate(input) {
    console.log("Calculating with input:", input); // 삭제할것
    return this.parseInput(input); // parseInput 호출
  }

  parseInput(input) {
    console.log("parsing input:", input); //삭제할것
    let separators = [...this.defaultSeparators];
    let numbersString = input;

    // 커스텀 구분자 확인
    const customSeparatorMatch = input.match(/^\/\/(.*?)\\n/);
    if (customSeparatorMatch) {
      const customSeparator = customSeparatorMatch[1].trim();
      separators.push(customSeparator);
      console.log("custom separator found:", customSeparator); //삭제할것
      numbersString = input.slice(customSeparatorMatch[0].length);
    }

    console.log("Using separators:", separators); //삭제할것
    const regex = new RegExp(`[${separators.join("")}]+`);
    const numbers = numbersString.split(regex).map((num) => {
      const trimmedNum = num.trim();
      const parsedNum = parseFloat(trimmedNum);
      console.log("parsed number:", parsedNum); //삭제할것

      if (isNaN(parsedNum)) {
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
      }

      if (parsedNum < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }

      return parsedNum;
    });
    console.log("Parsed numbers:", numbers); //삭제할것
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    console.log("sum of numbers:", sum); //삭제할것
    return sum;
  }
}
export default CalculatorModel;

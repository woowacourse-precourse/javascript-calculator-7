class StringCalculator {
  add(input) {
    if (!input) return 0;

    let numbers = input;
    const delimiters = [",", ":"];

    if (input.startsWith("//")) {
      const [delimiterPart, numbersPart] = input.split("\\n");
      const customDelimiter = delimiterPart.slice(2);
      delimiters.push(customDelimiter);
      numbers = numbersPart;
    }

    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const splitNumbers = numbers.split(delimiterRegex);

    const parsedNumbers = splitNumbers.map((num) => {
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)) throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
      if (parsed < 0) throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      return parsed;
    });

    return parsedNumbers.reduce((acc, num) => acc + num, 0);
  }
}

export default StringCalculator;

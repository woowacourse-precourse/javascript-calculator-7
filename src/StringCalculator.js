class StringCalculator {
  add(input) {
    if (!input) {
      return 0;
    }

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

    const parsedNumbers = splitNumbers.map((num) => parseInt(num, 10));

    return parsedNumbers.reduce((acc, num) => acc + num, 0);
  }
}

export default StringCalculator;

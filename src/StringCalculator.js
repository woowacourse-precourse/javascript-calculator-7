class StringCalculator {
  add(input) {
    let numbers = input;
    const delimiters = [",", ":"];

    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const splitNumbers = numbers.split(delimiterRegex);

    return splitNumbers.reduce((acc, num) => acc + +num, 0);
  }
}

export default StringCalculator;

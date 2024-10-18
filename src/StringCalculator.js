export class StringCalculator {
  separateCustomDelimiter(input) {
    const customDelimiterRegex = /^\/\/(.)\\n/;
    const customemDelimiterFormat = input.match(customDelimiterRegex);
    const customDelimiter = customemDelimiterFormat[1];
    const valueString = input.slice(customemDelimiterFormat[0].length);
    return { customDelimiter, valueString };
  }

  extractValues(delimiters, valueString) {
    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
    const values = valueString.split(delimiterRegex);
    return values;
  }

  calculateSum(values) {
    let sumValue = 0;
    for (let value of values) {
      sumValue = sumValue + Number(value);
    }
    return sumValue;
  }
}

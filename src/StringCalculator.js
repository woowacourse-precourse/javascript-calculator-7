export class StringCalculator {
  separateCustomDelimiter(input) {
    const customDelimiterRegex = /^\/\/(.)\n/;
    const customemDelimiterFormat = input.match(customDelimiterRegex);
    const customDelimiter = customemDelimiterFormat[1];
    const valueString = input.slice(customemDelimiterFormat[0].length);
    return { customDelimiter, valueString };
  }
}

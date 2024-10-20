import CustomDelimiterParser from './CustomDelimiterParser.js';
import NumberProcessor from './NumberProcessor.js';

class StringCalculator {
  static calculate(str) {
    const delimiter = CustomDelimiterParser.getSeparator(str);
    const newStr = CustomDelimiterParser.deleteCustomDelimiter(str);
    const sum = NumberProcessor.process(newStr, delimiter);
    return Number.isNaN(sum) ? 0 : sum;
  }
}

export default StringCalculator;

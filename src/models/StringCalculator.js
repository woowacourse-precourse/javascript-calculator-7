import CustomDelimiterParser from './CustomDelimiterParser.js';
import NumberProcessor from './NumberProcessor.js';

class StringCalculator {
    constructor() {
    this.numberProcessor = new NumberProcessor();
    this.delimiterParser = new CustomDelimiterParser();
}

calculate(str) {
    const delimiter = this.delimiterParser.getSeparator(str);
    const newStr = this.delimiterParser.deleteCustomDelimiter(str);
    const sum = this.numberProcessor.process(newStr, delimiter);
    return isNaN(sum) ? 0 : sum;
}

}

export default StringCalculator;

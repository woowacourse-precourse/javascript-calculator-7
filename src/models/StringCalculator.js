import CustomDelimiterParser from './CustomDelimiterParser.js';
import NumberProcessor from './NumberProcessor.js';

class StringCalculator {
    constructor() {
    this.numberProcessor = new NumberProcessor();
    this.delimiterParser = new CustomDelimiterParser();
}

calculate(str) {
    const delimiter = this.delimiterParser.getSeparator(str);
    const newStr = this.deleteCustomDelimiter(str);
    const sum = this.numberProcessor.process(newStr, delimiter);
    return sum;
}

deleteCustomDelimiter(str) {
    const removeIndex = str.indexOf('//');

    if (removeIndex === -1) return str;

    const newLineIndex = str.indexOf('\\n',removeIndex);
    if (newLineIndex === -1) {
    throw new Error('[ERROR] 잘못된 커스텀 구분자 형식입니다.');
    }

    return str.slice(0, removeIndex) + str.slice(newLineIndex + 2);
}
}

export default StringCalculator;

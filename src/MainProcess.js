import StringValidator from './utils/StringValidatorUtils.js'
import StringParsing from './utils/StringParsingUtils.js';
import StringCalculatorUtils from './utils/StringCalculatorUtils.js';

const validator = new StringValidator();
const parsing = new StringParsing();
const calculator = new StringCalculatorUtils();

export function mainProcess(input) {

    if (validator.checkEmptyString(input) === 0) {
        return 0;
    }

    checkingProcessBeforeParsing(input);

    const { parsedArray, customDelimiter } = parsing.parsing(input);

    checkingProcessAfterParsing(parsedArray, customDelimiter);

    var resultNumArray = calculator.convertNumArray(parsedArray);

    const resultSum = calculator.calculateSum(resultNumArray);

    return resultSum;
}

export function checkingProcessBeforeParsing(input) {
    validator.checkCustomDelimiterPosition(input);
    validator.checkMultipleDeclareCustomDelimiter(input);
}

export function checkingProcessAfterParsing(parsedArray) {
    validator.checkEmptyOrSpace(parsedArray)
    validator.checkIncludesNonNumber(parsedArray);
    validator.checkNegativeNumbers(parsedArray);
}

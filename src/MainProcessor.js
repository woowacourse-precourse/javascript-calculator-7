import StringValidator from './Utils/StringValidatorUtils.js'
import StringParsing from './Utils/StringParsingUtils.js';
import StringCalculatorUtils from './Utils/StringCalculatorUtils.js';

const validator = new StringValidator();
const parsing = new StringParsing();
const calculator = new StringCalculatorUtils();

export function stringCalculator(input) {

    checkingProcessBeforeParsing(input);

    const { parsedArray, customDelimiter } = parsing.parsing(input);

    checkingProcessAfterParsing(parsedArray, customDelimiter);

    var resultNumArray = calculator.convertNumArray(parsedArray);

    const resultSum = calculator.calculateSum(resultNumArray);

    return resultSum;
}

export function checkingProcessBeforeParsing(input) {
    validator.checkEmptyString(input);
    validator.checkCustomDelimiterPosition(input);
    validator.checkMultipleDeclareCustomDelimiter(input);
}

export function checkingProcessAfterParsing(parsedArray, customDelimiter) {
    validator.checkMultipleDelimiter(parsedArray, customDelimiter);
    validator.checkIncludesNonNumber(parsedArray);
    validator.checkNegativeNumbers(parsedArray);
}

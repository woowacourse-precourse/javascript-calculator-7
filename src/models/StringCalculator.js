import CustomDelimiterParser from './CustomDelimiterParser.js';
import NumberProcessor from './NumberProcessor.js';

class StringCalculator {

    constructor() {
        this.numberProcessor = new NumberProcessor();
        this.delimiterParser = new CustomDelimiterParser();
        
    }

    calculate(string){
        let test = this.delimiterParser.getSeparator(string);
        console.log(test);
    }

}

export default StringCalculator;
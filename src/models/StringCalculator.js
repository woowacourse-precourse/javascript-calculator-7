import CustomDelimiterParser from './CustomDelimiterParser.js';

class StringCalculator {

    constructor() {
        this.delimiterParser = new CustomDelimiterParser();
    }

    calculate(string){
        let test = this.delimiterParser.getSeparator(string);
        console.log(test);
    }

}

export default StringCalculator;
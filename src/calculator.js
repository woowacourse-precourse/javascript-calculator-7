class Calculator {
    calculate(input) {
        if(input === "") {
            return 0;
        }
        const { delimiter, numberString } = this.extractDelimiterAndNumbers(input);
        const numbers = this.splitNumbers(numberString, delimiter);
        
        return this.calculateSum(numbers);
    }

    extractDelimiterAndNumbers(input) {
        if(input.startsWith('//') && input.indexOf('\\n' >= 3)) {
            const customDelimiterStartIndex = input.indexOf('\\n');
            const customDelimiter = input.slice(2,customDelimiterStartIndex);
            const numberString = input.slice(customDelimiterStartIndex + 2); 
            
            return { delimiter : new RegExp(`[${customDelimiter},:]`), numberString };
        }
        return { delimiter: /[,:]/, numberString: input };
    }

    splitNumbers(numberString, delimiter) {
        return numberString.split(delimiter);
    }

    calculateSum(numbers) {
        return numbers.reduce((sum, number) => {
            return number !== '' ? sum + parseInt(number) : sum;
        }, 0);
    }
}

export default Calculator;
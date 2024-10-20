class Calculator {
    calculate(input) {
        if(this.isEmpty(input)) {
            return 0;
        }
        const { delimiter, string } = this.extractDelimiterAndString(input);
        const numStrArr = this.splitNumbers(string, delimiter);
        return this.calculateSum(numStrArr);
    }

    isEmpty(input) {
        return input === "";
    }

    extractDelimiterAndString(input) {
        if(this.hasCustomDelimiter(input)) {
            const { customDelimiter, string } = this.getCustomDelimiterAndString(input);
            return { delimiter: this.createDelimiterRegex(customDelimiter), string };
        }
        return { delimiter: /[,:]/, string: input };
    }

    hasCustomDelimiter(input) {
        return input.startsWith('//') && input.indexOf('\\n') === 3;
    }

    getCustomDelimiterAndString(input) {
        const customDelimiter = input.slice(2, 3);
        const string = input.slice(5);
        return { customDelimiter, string };
    }

    createDelimiterRegex(customDelimiter) {
        const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
        return new RegExp(`[${escapedDelimiter},:]`);
    }

    splitNumbers(string, delimiter) {
        return string.split(delimiter);
    }

    calculateSum(numStrArr) {
        return numStrArr.reduce((sum, number) => sum + parseInt(number, 10), 0);
    }
}

export default Calculator;
class StringParser {
    static parse(input) {
        const { customSeparator, numberString } = this.extractCustomSeparator(input);
        return this.splitAndConvert(numberString, customSeparator);
    }

    static extractCustomSeparator(input) {
        const customSeparatorRegex = /^\/\/(.)\n(.*)/;
        const match = input.match(customSeparatorRegex);
        if (match) {
            return { customSeparator: match[1], numberString: match[2] };
        }
        return { customSeparator: null, numberString: input };
    }

    static splitAndConvert(numberString, customSeparator) {
        const separators = customSeparator ? [customSeparator, ',', ':'] : [',', ':'];
        const regex = new RegExp(`[${separators.join('')}]`);
        return numberString.split(regex).map(num => parseInt(num, 10));
    }
}

export default StringParser;
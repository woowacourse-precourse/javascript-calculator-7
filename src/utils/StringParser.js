class StringParser {
    static parse(input) {
        const { separator, numberString } = this.extractCustomSeparator(input);
        return this.splitAndConvert(numberString, separator);
    }

    static extractCustomSeparator(input) {
        const customSeparatorRegex = /^\/\/(.)\n(.*)/;
        const match = input.match(customSeparatorRegex);
        if (match) {
            return { separator: match[1], numberString: match[2] };
        }
        return { separator: null, numberString: input };
    }

    static splitAndConvert(numberString, customSeparator) {
        let regex;
        if (customSeparator) {
            const escapedSeparator = customSeparator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            regex = new RegExp(escapedSeparator, 'g');
        } else {
            regex = /[,:|]/g;
        }
        return numberString.split(regex).map(num => parseInt(num, 10));
    }
}

export default StringParser;
class StringParser {
    constructor(value) {
        this.value = value;
        this.result = [];
    }
    isNumber(str) {
        if (str.includes('-')) return false;
        if (str.includes('.')) return false;
        const num = Number(str);
        if (isNaN(num)) return false;
        return num;
    }
    parse() {
        if (typeof this.value !== 'string') return 'error';
        if (this.value.startsWith('//')) return this.customParse();
        else return this.basicParse();
    }
    customParse() {
        const indexOfEnd = this.value.indexOf('\\n');
        if (indexOfEnd === -1) return 'error';
        const pivotString = this.value.substring(2, indexOfEnd);
        const splitByPivot = this.value
            .substring(indexOfEnd + 2)
            .split(pivotString);
        for (let i = 0; i < splitByPivot.length; i++) {
            const num = Number(splitByPivot[i]);
            if (splitByPivot[i].includes('.') || isNaN(num)) return 'error';
            this.result.push(num);
        }
        return this.result;
    }
    basicParse() {
        const splitByComma = this.value.split(',');

        for (let i = 0; i < splitByComma.length; i++) {
            const splitByColon = splitByComma[i].split(':');
            for (let j = 0; j < splitByColon.length; j++) {
                const isNum = this.isNumber(splitByColon[j]);
                if (isNum === false) return 'error';
                this.result.push(isNum);
            }
        }
        return this.result;
    }
}

const parseString = (inputValue) => {
    const parser = new StringParser(inputValue);
    return parser.parse();
};

export default parseString;

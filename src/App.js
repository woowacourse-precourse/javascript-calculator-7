import {
    calculator,
    getStringAsync,
    handleError,
    parseString,
} from './utils/index.js';

class App {
    constructor() {
        this.initString = '';
        this.parsedResult = null;
    }

    setString(value) {
        this.initString = value.trim();
    }

    parse() {
        this.parsedResult = parseString(this.initString);
        this.result();
    }

    result() {
        if (this.parsedResult === 'error') handleError();
        else calculator(this.parsedResult);
    }

    async run() {
        const inputValue = await getStringAsync();
        this.setString(inputValue);
        this.parse();
    }
}

export default App;

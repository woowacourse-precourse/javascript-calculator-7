import { getStringAsync, parseString } from './utils/index.js';

class App {
    initString;

    setString(value) {
        this.initString = value;
    }
    parse() {
        const parseedResult = parseString(this.initString);
        if (parseedResult === 'error') {
        }
    }

    async run() {
        const inputValue = await getStringAsync();
        this.setString(inputValue);
        this.parse();
    }
}

export default App;

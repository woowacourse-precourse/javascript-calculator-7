import { getStringAsync, parseString } from './utils/index.js';

class App {
    initString;

    setString(value) {
        this.initString = value;
    }
    basicSplit() {}
    customSplit() {}
    handleError() {}

    async run() {
        const inputValue = await getStringAsync();
        this.setString(inputValue);
        const result = parseString(this.initString);
        console.log(result);
    }
}

export default App;

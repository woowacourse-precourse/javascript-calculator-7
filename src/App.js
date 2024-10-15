import { getStringAsync } from './utils/index.js';

class App {
    initString;

    setString(value) {
        this.initString = value;
    }

    async run() {
        const inputValue = await getStringAsync();
        this.setString(inputValue);
    }
}

export default App;

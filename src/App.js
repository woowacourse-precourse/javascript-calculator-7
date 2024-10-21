import StringCalculator from "./StringCalculator.js";

class App {
    async run() {
        const stringCalculator = new StringCalculator()
        await stringCalculator.start()
    }
}

export default App;

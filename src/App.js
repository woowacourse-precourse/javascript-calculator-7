import getString from './utils/getString';
import splitBySymbol from './utils/splitBySymbol';

class App {
  async run() {
    const inputValue = await getString();
    const seperatedValue = splitBySymbol(inputValue)
  }
}

export default App;

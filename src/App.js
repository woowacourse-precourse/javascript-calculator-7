import getString from './utils/getString';
import parseIntArray from './utils/parseIntArray';
import splitBySymbol from './utils/splitBySymbol';

class App {
  async run() {
    const inputValue = await getString();
    const seperatedValue = splitBySymbol(inputValue);
    const intArray = parseIntArray(seperatedValue);

  }
}

export default App;

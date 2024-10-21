import Calculator from './Calculator.js';
import NumberConverter from './converters/NumberConverter.js';
import DelimiterExtractor from './delimiterExtractors/DelimiterExtractor.js';
import SumOperation from './operations/SumOperation.js';
import StringSplitter from './splitters/StringSplitter.js';

class App {
  async run() {
    try {
      const delimiterExtractor = new DelimiterExtractor();
      const splitter = new StringSplitter();
      const converter = new NumberConverter();
      const operation = new SumOperation();

      const cal = new Calculator(
        delimiterExtractor,
        splitter,
        converter,
        operation
      );

      await cal.run();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;

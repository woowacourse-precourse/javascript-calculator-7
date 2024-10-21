import { getInput } from './views/InputView.js';
import { printResult } from './views/OutputView.js';
import { Calculator } from './models/Calculator.js';
import { Console } from "@woowacourse/mission-utils";

const calculator = new Calculator();

async function run() {
  try {
    const input = await getInput();
    const result = calculator.calculate(input);
    printResult(result);
  } catch (error) {
    Console.print(error.message);
  }
}

export default run;

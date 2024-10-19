export default class CalculatorController {
  static async processInput(input) {
    if (input.startsWith('//') && input[3] == '/' && input[4] == 'n') {
      const delimiter = input[2];
      const cleanInput = input.split('\n')[1];
      const numbers = StringCalculator.extractNumbers(cleanInput, delimiter);
    } else {
      const delimiter = /[,:]/;
      const numbers = StringCalculator.extractNumbers(input, delimiter);
    }
  }
}

class StringCalculator {
    constructor() {
      this.result = 0;
    }
  
    calculate(numbers) {
      this.result = numbers.reduce((sum, num) => sum + num, 0);
      return this.result;
    }
  
    getResult() {
      return this.result;
    }
  }
  
  export default StringCalculator;
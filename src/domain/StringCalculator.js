class StringCalculator {
  #delimiters;
  #numbers;

  constructor(inputValue) {
    this.inputValue = inputValue;
    this.#delimiters = [',', ':'];
    this.#numbers = [];
  }

  getCalculatorResult() {
    this.#extractCustomDelimiter();
    this.#extractNumbers();
    return this.#sumNumbers();
  }

  #extractCustomDelimiter() {
    if (this.inputValue.startsWith('//')) {
      const customDelimiter = this.inputValue.substring(2, this.inputValue.indexOf('\\n'));
      this.#delimiters.push(customDelimiter);
      this.inputValue = this.inputValue.substring(this.inputValue.indexOf('\\n') + 2);
      // console.log(this.inputValue);
    }
  }

  #extractNumbers() {
    const regex = new RegExp(`[${this.#delimiters.join('')}]`, 'g');
    // console.log(regex);
    this.#numbers = this.inputValue.split(regex).map(Number);
    // console.log(this.#numbers);
  }

  #sumNumbers() {
    return this.#numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default StringCalculator;
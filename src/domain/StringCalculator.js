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
    }
  }

  #extractNumbers() {
    const escapedDelimiters = this.#delimiters.map(delimiter => delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`[${escapedDelimiters.join('')}]`, 'g');
    this.#numbers = this.inputValue.split(regex).map(Number);
  }

  #sumNumbers() {
    return this.#numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default StringCalculator;
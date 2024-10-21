export default class NumberSplitter {
  static split(delimiters, str) {
    const result = str.split('').reduce((acc, char) => {
      if (delimiters.includes(char)) {
        if (acc.currentNumber) {
          acc.numbers.push(parseInt(acc.currentNumber, 10));
          acc.currentNumber = '';
        }
      } else {
        acc.currentNumber += char;
      }

      return acc;
    }, { numbers: [], currentNumber: '' });

    if (result.currentNumber) {
      result.numbers.push(parseInt(result.currentNumber, 10));
    }

    return result.numbers;
  }
}

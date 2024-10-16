class App {
  async run() {}

  calculate(numberArray) {
    const result = numberArray.reduce((currentSum, targetNumber) => {
      return currentSum + targetNumber;
    }, 0);

    return result;
  }
}

export default App;

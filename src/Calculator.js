const sumNumbers = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((sum, number) => sum + number, 0);
};

export default sumNumbers;

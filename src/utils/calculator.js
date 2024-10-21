export const calculator = {
  addition: (numbers) => {
    const sum = numbers.map(Number).reduce((acc, curr) => acc + curr, 0);
    return sum;
  },
};

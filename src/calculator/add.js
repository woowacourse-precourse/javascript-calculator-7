const add = (inputString) => {
  const separator = /[,:]/;
  const number = inputString.split(separator).map(Number);
  const sum = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
};

export default add;

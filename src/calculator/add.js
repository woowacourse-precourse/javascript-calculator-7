import errorCheck from "./errorCheck.js";
const add = (inputString, custom) => {
  const separator = new RegExp(`[${custom},:]`);

  const number = custom
    ? inputString.substr(5).split(separator).map(Number)
    : inputString.split(separator).map(Number);

  errorCheck(inputString, number);
  const sum = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
};

export default add;

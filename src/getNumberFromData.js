import checkIsCorrectChar from "./checkIsCorrectChar.js";

function getNumberFromData (data, separator, sum) {
  const regex = new RegExp(`[${separator}]`);
  let number = [];
  
  number = data.split(regex).map((value) => {
    if (checkIsCorrectChar(value, separator)) {
      if (value === '') {
        return 0;
      } else {
        return parseInt(value, 10);
      }
    }
  });

  sum = number.reduce((total, value) => total += value);
  return sum;
};

  export default getNumberFromData;
export const sumNumericStringList = (numericStringList) => {
  return numericStringList.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );
};

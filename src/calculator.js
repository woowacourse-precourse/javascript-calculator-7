const validateNumber = (number) => {
  const formatNumber = Number(number);
  if (formatNumber >= 0) {
    return formatNumber;
  }
  throw new Error("유효하지 않은 숫자입니다.");
};

export const calculateSum = (numbers) => {
  return numbers.map(validateNumber).reduce((acc, cur) => acc + cur, 0);
};

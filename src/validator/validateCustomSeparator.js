const validateCustomSeparator = (customSeparator) => {
  if (
    customSeparator === "," ||
    customSeparator === ":" ||
    customSeparator.length > 1 ||
    isNaN(customSeparator) === false
  )
    return false;
  return true;
};

export default validateCustomSeparator;

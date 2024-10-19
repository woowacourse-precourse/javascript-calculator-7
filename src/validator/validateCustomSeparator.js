const validateCustomSeparator = (delimiter) => {
  if (
    delimiter === "," ||
    delimiter === ":" ||
    delimiter.length > 1 ||
    isNaN(delimiter) === true
  )
    return false;
  return true;
};

export default validateCustomSeparator;

const replaceDelimitersToComma = (input, delimiters) => {
  let newCalculateString = input;
  delimiters.forEach((delimiter) => {
    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedDelimiter, 'g');
    newCalculateString = newCalculateString.replace(regex, ',');
  });
  return newCalculateString;
};

export default replaceDelimitersToComma;

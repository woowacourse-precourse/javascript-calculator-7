const isValidDelimiterFormat = function isValidDelimiterFormatFunc(input) {
  return input.startsWith('//') && input.indexOf('\\n') !== -1;
};

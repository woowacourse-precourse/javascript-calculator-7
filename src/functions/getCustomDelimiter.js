const isValidDelimiterFormat = function isValidDelimiterFormatFunc(input) {
  return input.startsWith('//') && input.indexOf('\\n') !== -1;
};

const extractDelimiter = function extractDelimiterFunc(input) {
  return input.slice(2, input.indexOf('\\n') - 1);
};

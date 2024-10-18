export default class Calculator {
  hasCustomPrefixSeparator(string) {
    return /^\/\/.+\\n.*/.test(string);
  }

  extractSeparator(string) {
    const seperators = string.split(/\/\/|\\n/);
    return seperators[1];
  }
}

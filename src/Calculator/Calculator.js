export default class Calculator {
  hasCustomPrefixSeparator(string) {
    return /^\/\/.+\\n.*/.test(string);
  }
}

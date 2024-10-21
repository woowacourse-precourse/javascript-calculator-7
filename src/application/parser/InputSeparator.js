export default class InputSeparator {
  constructor() {
  }

  hasCustomDelimiter(rawInput) {
    if (rawInput.length >= 5 && rawInput.startsWith('//') &&  rawInput.indexOf('\\n') === 3) {
      return true;
    }
    return false;
  }
}

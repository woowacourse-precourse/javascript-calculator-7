class CustomSepatator {
  static #CUSTOM_SEPARATOR_PATTERN = /^\/\/(.*)\\n/;

  static hasPattern(string) {
    return CustomSepatator.#CUSTOM_SEPARATOR_PATTERN.test(string);
  }

  static removePattern(string) {
    return string.replace(CustomSepatator.#CUSTOM_SEPARATOR_PATTERN, "");
  }

  static extractSeparator(string) {
    // eslint-disable-next-line no-unused-vars
    const [, separator, ...rest] = string.match(
      CustomSepatator.#CUSTOM_SEPARATOR_PATTERN
    );
    return separator;
  }
}

export default CustomSepatator;

import { Console } from "@woowacourse/mission-utils";

const CUSTOM_PATTERN = /\/\/\D+\\n/;
const WHOLE_PATTERN = /\/\/\D+\\n[\s\S]+/;

class App {
  async run() {
    const input = await Console.readLineAsync();

    const separator = [":", ","];
    const isString = this.isString(input);

    if (isString) {
      if (this.isUsedCustomSeparator(input)) {
        this.addCustomSeparator(input, separator);
      }

      const pattern = this.sliceCustomPattern(input);
      const numberStringWithSeparators = input.slice(pattern.length);
      const nums = numberStringWithSeparators
        .split(new RegExp(`[${separator.join("")}]`))
        .map(Number);
    }
  }

  isString(input) {
    if (typeof input === "string") {
      return true;
    }

    throw new Error("[ERROR] 문자열을 입력해주세요.");
  }

  isUsedCustomSeparator(input) {
    if (WHOLE_PATTERN.test(input)) {
      return true;
    }
    return false;
  }

  sliceCustomPattern(input) {
    if (this.isUsedCustomSeparator(input)) {
      const [custom] = input.match(CUSTOM_PATTERN);
      return custom;
    }

    return "";
  }

  addCustomSeparator(input, separator) {
    const pattern = this.sliceCustomPattern(input);
    const customSeparator = pattern
      .split(/[//,\\n]/)
      .filter((i) => i.length > 0);
    separator.push(...customSeparator);
  }
}

export default App;

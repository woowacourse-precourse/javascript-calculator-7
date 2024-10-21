import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getSentence() {
    const sentence = MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    return sentence;
  }

  findCustom(input) {
    const START_STRING = "//";
    const END_STRING = "\\n";
    const customStart = input.startsWith(START_STRING);

    if (customStart) {
      const customEndIndex = input.indexOf(END_STRING);
      if (customEndIndex === -1) {
        throw new Error("[ERROR]");
      }
      const customSeparator = input.slice(START_STRING.length, customEndIndex);
      const splitSentece = input.slice(customEndIndex + END_STRING.length);
      return [customSeparator, splitSentece];
    } else {
      return [null, input];
    }
  }

  splitSentence(separator, input) {
    const customRegex = separator ? new RegExp(`[${separator},:]+`) : /[,:]+/;
    const splitArray = input.split(customRegex);
    return splitArray;
  }

  async run() {
    try {
      const sentence = await this.getSentence();
      const [customSeparator, findSentence] = this.findCustom(sentence);
      const splitArray = await this.splitSentence(customSeparator, findSentence);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;

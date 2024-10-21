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

  validationTest(num) {
    if (isNaN(num) || num < 0) {
      throw new Error("[ERROR]");
    }
  }

  convertNumber(input) {
    const cleanNumArray = input.map((num) => {
      const cleanNum = Number(num);
      this.validationTest(cleanNum);
      return cleanNum;
    });
    return cleanNumArray;
  }

  plusArray(input) {
    const INITIAL_VALUE = 0;
    const sumWithInitial = input.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      INITIAL_VALUE
    );
    return sumWithInitial;
  }

  printSum(input) {
    return MissionUtils.Console.print("결과 : " + input);
  }

  async run() {
    try {
      const sentence = await this.getSentence();
      const [customSeparator, findSentence] = this.findCustom(sentence);
      const splitArray = await this.splitSentence(customSeparator, findSentence);
      const numberArray = this.convertNumber(splitArray);
      const sumArray = await this.plusArray(numberArray);
      await this.printSum(sumArray);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;

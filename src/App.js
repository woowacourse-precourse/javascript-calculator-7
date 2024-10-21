import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("입력하세요.\n");

    const replacedString = input.replaceAll(":", ",");
    let resultString = replacedString;

    if (validateIncludeCustomSeperator(replacedString)) {
      const customSeprator = getCustomSeperator(resultString);

      if (customSeprator === "-") {
        validateMinusNumberInDashSperator(resultString);
      }

      resultString = resultString.replaceAll(customSeprator, ",");
      resultString = resultString.replaceAll("//,\\n", "");
    }

    validateAcceptableString(resultString);
  }
}

const validateIncludeCustomSeperator = (string) => {
  const CUSTOM_SPERATOR_REGEX = /\/\/.+\\n/;
  return CUSTOM_SPERATOR_REGEX.test(string);
};

const getCustomSeperator = (string) => {
  const MATCH_REGEX = /\/\/(.*?)\\n/;
  const match = string.match(MATCH_REGEX);

  if (match) {
    return match[1];
  } else {
    throw new Error("[ERROR] 올바르지 않은 형식입니다.");
  }
};

const validateMinusNumberInDashSperator = (string) => {
  if (string.indexOf("--") >= 0) {
    throw new Error("[ERROR] 음수는 입력 불가능합니다.");
  }
};

const validateAcceptableString = (string) => {
  const ACCEPTABLE_REGEX = /^[0-9,]+$/;

  if (!ACCEPTABLE_REGEX.test(string)) {
    throw new Error("[ERROR] 올바르지 않은 문자를 포함하고 있습니다.");
  }
};


export default App;

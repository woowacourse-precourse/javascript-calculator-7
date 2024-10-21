import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userString = await this.getUserString();
    const customDelimiter = this.getCustomDelimiter(userString);
    const calArray = this.getDelimiterArray(userString, customDelimiter);
    const calsum = this.getArraysum(calArray);
    MissionUtils.Console.print("결과 : " + calsum);
  }

  //문자열 입력 받기
  async getUserString() {
    try {
      const userString = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요. \n"
      );
      return userString;
    } catch (error) {}
  }

  //커스텀 구분자 추출
  getCustomDelimiter(string) {
    const customDelimiter = string.match(/\/\/(.+)\\n/);
    if (customDelimiter) {
      return customDelimiter[1];
    } else {
      return false;
    }
  }

  //구분자를 기준으로 배열 반환
  getDelimiterArray(string, customDelimiter) {
    if (customDelimiter) {
      string = string.replace(/\/\/(.+)\\n/, "");
      let delimiterPattern = new RegExp(`[:,${customDelimiter}]`);
      return string.split(delimiterPattern);
    } else {
      return string.split(/[:,]/);
    }
  }

  //배열의 합 구하기, 잘못된 값 입력 검증
  getArraysum(cal) {
    let sum = 0;
    cal.forEach((num) => {
      num = parseInt(num);
      if (typeof num !== "number" || num <= 0) {
        throw new Error("[ERROR]");
      } else {
        sum = sum + num;
      }
    });
    return sum;
  }
}

export default App;

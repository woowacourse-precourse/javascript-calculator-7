const { Console } = await import("@woowacourse/mission-utils");
class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");

    let result = 0;
    let input = await Console.readLineAsync("");
    input = input.replace(" ", ""); // 공백 제거

    const type = this.checkType(input);

    switch(type) {
      case "default":
        if (this.checkDefaultValidation(input) == false) {
          throw this.validationError();
        }

        result = this.calculateDefault(input);
        break;
      case "custom":
        if (this.checkCustomValidation(input) == false) {
          throw this.validationError();
        }

        result = this.calculateCustom(input);
        break;
      default:
        if (this.checkDefaultValidation(input) == false) {
          throw this.validationError();
        }

        result = this.calculateDefault(input);
        break;
    }

    Console.print("결과 : " + result);
  }

  // 기본형인지 커스텀 타입인지 구분하는 메서드
  checkType(input) {
    const regExp = new RegExp(/^(\/\/.+\\n)/g);

    if (input.match(regExp) !== null) {
      return "custom";
    }

    return "default";
  }

  checkDefaultValidation(input) { 
    const regExp = new RegExp(/^\d+([,:]\d+)*$/g);

    // 첫 문자나 끝 문자가 숫자가 아니거나
    // 콤마와 세미콜론이 아닌 구분자를 포함하고 있거나
    // 콤마와 세미콜론이 연속적으로 사용될 때
    if (regExp.test(input) === false) {
      return false;
    }

    return true;
  }

  checkCustomValidation(input) {
    const divider = this.getCustomDivider(input);
    let dividerRegExp = "";

    for (let i = 0; i < divider.length; i++) {
      dividerRegExp += `\\` + divider[i];
    }

    const regExp = new RegExp(`^\\/\\/${dividerRegExp}\\\\n\\d+(${dividerRegExp}\\d+)*$`, 'g');

    // 첫 시작이 //특수문자\n 가 아니거나
    // 끝 문자가 숫자가 아니거나
    // 특수문자 구분자가 아닌 다른 구분자가 있을 때
    if (regExp.test(input) === false) {
      return false;
    }

    return true;
  }

  calculateDefault(input) {
    const sum = input
      .split(new RegExp(/[,:]/g))
      .map((str) => Number(str))
      .reduce((prev, curr) => prev + curr, 0);

    return sum;
  }

  calculateCustom(input) {
    const divider = this.getCustomDivider(input);
    const sum = input
      .slice(divider.length + 4)
      .split(divider)
      .map((str) => Number(str))
      .reduce((prev, curr) => prev + curr, 0);

    return sum;
  }

  getCustomDivider(input) {
    return input.substring(2, input.search(/\\n/));
  }

  validationError() {
    return new Error("[ERROR] 입력값의 형식이 잘못되었습니다.");
  }

}

export default App;

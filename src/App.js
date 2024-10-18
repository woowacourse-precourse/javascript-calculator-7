const { Console } = await import("@woowacourse/mission-utils");
class App {
  async run() {
    let input = await Console.readLineAsync("");
    input = input.replace(" ", ""); // 공백 제거

    const type = this.checkType(input);
    
    switch(type) {
      case "default":
        if (checkDefaultValidation(input) == false) {
          throw validationError();
        }

        calculateDefault();
        break;
      case "custom":
        if (checkCustomValidation(input) == false) {
          throw validationError();
        }

        calculateCustom();
        break;
      default:
        if (checkDefaultValidation(input) == false) {
          throw validationError();
        }

        calculateDefault();
        break;
    }

    Console.print(input);
  }

  // 기본형인지 커스텀 타입인지 구분하는 메서드
  checkType(input) {
    const regExp = new RegExp(/^(\/\/\D\\n)/g);

    if (input.test(regExp) === true) {
      return "custom";
    }

    return "default";
  }

  checkDefaultValidation(input) {
    // 첫 문자나 끝 문자가 숫자가 아니거나
    // 콤마와 세미콜론이 아닌 구분자를 포함하고 있거나
    // 콤마와 세미콜론이 연속적으로 사용될 때 
    const regExp = new RegExp(/^\d+([,:]\d+)*$/g);

    if (regExp.test(input) === false) {
      return false;
    }

    return true;
  }

  checkCustomValidation(input) {

  }

  calculateDefault() {

  }

  calculateCustom() {

  }

  validationError() {
    return new Error("[ERROR] 입력값의 형식이 잘못되었습니다.");
  }

}

export default App;

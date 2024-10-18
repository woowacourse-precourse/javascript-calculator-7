const { Console } = await import("@woowacourse/mission-utils");
class App {
  async run() {
    const input = await Console.readLineAsync("");

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

import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const readString = await Console.readLineAsync("입력할 문자열: ");
    const { success, customSeperator } = this.findCustomSeperator(readString);
    if (success) {
      Console.print(customSeperator);
    } else {
      Console.print("기본 구분자 사용: ,");
    }
  }

  // 만약 문자열에 커스텀 구분자가 있다면, 그 구분자를 반환한다.
  findCustomSeperator(readString) {
    let customSeperator = ",";
    const regex = /\/\/(.+)\n/gm;
    const match = regex.exec(readString);

    if (match) {
      customSeperator = match[1];
      return {
        success: true,
        customSeperator,
      };
    }

    return {
      success: false,
    };
  }
}

export default App;

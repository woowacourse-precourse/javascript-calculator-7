import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputStr = await this.getString();
  }

  async getString(){
    try{
      const inputStr = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
      return inputStr;
    } catch(error){
      Console.print('Error: ' + error.message);
      return null;
    }
  }
}

export default App;
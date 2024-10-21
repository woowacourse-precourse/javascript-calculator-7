import {Console} from "@woowacourse/mission-utils"
import StringParser from "./StringParser.js"
class App {
  isEmptyString(input){
    return input === ""
  }
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.")
    try{
      if(this.isEmptyString(input)){
        Console.print("결과 : 0")
        return 
      }

      const {separators: defaultSeparators ,strippedInput } = StringParser.extractDefaultSeparators(input);

    }catch(err){
      Console.print(`[ERROR]:${err}`)
    }
  }
}

export default App;

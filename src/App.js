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
      const {separators: customSeparators, strippedInput: customStrippedInput} = StringParser.extractCustomSeparators(input); 

      const {separators: defaultSeparators ,strippedInput } = StringParser.extractDefaultSeparators(customStrippedInput);

      const splitResult = StringParser.splitByMultipleSeparators([...customSeparators, ...defaultSeparators, " "], strippedInput)

    }catch(err){
      Console.print(`[ERROR]:${err}`)
    }
  }
}

export default App;

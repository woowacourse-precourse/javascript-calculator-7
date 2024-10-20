import  {Console} from "@woowacourse/mission-utils"
class App {
  isEmptyString(input){
    return input === ""
  }
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.")
    if(this.isEmptyString(input)){
      Console.print("결과 : 0")
      return 
    }    

  }
}

export default App;

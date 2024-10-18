import { Console } from "@woowacourse/mission-utils";

class App {


  async run() {
    //get user input
    const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    Console.print(`raw input : ${userInput}`)
    //parse input with default delimiter
    if(userInput){
      const parsedInput=userInput.split(/[,:]/)
      Console.print(parsedInput)
    }else{
      Console.print(0)
    }
  }
}

export default App;

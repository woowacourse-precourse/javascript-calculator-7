import {Console, MissionUtils} from "@woowacourse/mission-utils";
class App {
  async run() {
    let inputStr= await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
    let result;
    if (inputStr===""){
      result=0;
    }
    Console.print("결과 : "+result);
  }
}

export default App;


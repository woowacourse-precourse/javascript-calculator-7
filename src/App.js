import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    try{
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력하여 주세요.\n");
      const result = `${input}`
      MissionUtils.Console.print(`결과: ${result}`);
    }catch(error){
      console.error("ERROR");
    }
  }
}

export default App;
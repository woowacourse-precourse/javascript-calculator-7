import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try{
      const INPUT_DATA = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      // MissionUtils.Console.print(INPUT_DATA)
      
    } catch (error) {

    }  
  }
}

export default App;
import {Console, MissionUtils} from "@woowacourse/mission-utils"

class App {

  inputStr() {
    const NOTICE = '문자열을 입력하고 enter를 눌러봐요\n- 커스텀 구분자를 추가하시고 싶으면, //를 입력 후 원하는 구분자를 입력하세요 \n- 종료를 원하시면 quit를 입력하세요 \n'
    const INPUT_STR = Console.readLineAsync(NOTICE)
    return INPUT_STR
  };

  async run() {
    try {
      while(true){
        
        const INPUT_STR = await this.inputStr()
        
        if (INPUT_STR === 'quit' ){
          Console.print("종료")
          break;
        }

      }
      
      
    } catch (error) {
      Console.print(error)
    }
  }
}

export default App;

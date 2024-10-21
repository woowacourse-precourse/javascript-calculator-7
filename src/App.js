// app.js는 애플리케이션의 주요 로직을 담고 있는 핵심 컴포넌트다. 
// app.js에서는 애플리케이션의 라우팅, 상태 관리 등의 주요 기능을 구현한다.

// export default App;
import { Console } from '@woowacourse/mission-utils';
import { getInput, printMessage, printErrorMsg } from '../utils/inout.js';
import { checkTypeAndCalc } from '../utils/calculator.js';

class App {
  // 애플리케이션을 실행하는 함수
  async run() {
    try {
      const input = await getInput();  //사용자로부터 입력 받기
      
      if (input) {
        checkTypeAndCalc(input); // 입력된 값을 checkType으로 전달하여 처리
      } else {
        printMessage("잘못된 입력입니다. 다시 시도해주세요.");
      }
    } catch (error) {
      printMessage("입력 처리 중 오류가 발생했습니다.");
    }
  }
}

const app = new App();
app.run();
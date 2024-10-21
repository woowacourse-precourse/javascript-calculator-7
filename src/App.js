import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() { /* 프로그램의 시작점 */
    MissionUtils.Console.print('덧셈할 문자열을 입력해주세요.')
    const input = await MissionUtils.Console.readLineAsync("")

    let number = '0'; // 숫자를 인식할 변수
    let sum = 0;      // 덧셈을 계산할 변수
    
    try {
      // 커스텀 구분자 지정
      let customseparator = true;
      if ( input.startsWith('//') ) {
        if ( input.slice(3, 5) == '\\n' ) {
          customseparator = input[2]
        } else {
          throw Error('[ERROR] 커스텀 구분자 지정에 실패했습니다.')
        }
      }
    } catch (err) {
      console.error(err.message)
      throw err
    }
  }
}

export default App;

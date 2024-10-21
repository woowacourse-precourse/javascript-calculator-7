import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    // [1] 사용자 입력 받기, 앞 뒤 공백제거
    let inputValue = String(
      await Console.readLineAsync("덧셈 계산을 위한 문자열을 입력해주세요 : ")
    ).trim();
    console.log(
      `xxxxx(확인용 - 최초 입력값 = ${inputValue}) / type : ${typeof inputValue}`
    );

  }
}

export default App;

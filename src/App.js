import { Console } from "@woowacourse/mission-utils"; 

class App {
  async run() {
    
    // 문자열 입력 받음
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")

    // 문자열 입력 검증
    if (this.validateDefaultDelimiters(input)) {
      // 기본 구분자라면, 쉼표와 콜론으로 숫자 분리
      const numbers = input.split(/[,:]/).map(Number)
    } else {
      // 커스텀 구분자가 있다면, 해당 구분자로 숫자 분리
      const numbers = this.extractCustomDelimitersNumber(input)
    }
    
  }

  extractCustomDelimitersNumber(input) {
    
  }

  validateDefaultDelimiters(input) {

  }
}

export default App;

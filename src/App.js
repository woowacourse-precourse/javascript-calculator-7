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

  // 커스텀 구분자를 바탕으로 숫자를 분리해주는 함수
  extractCustomDelimitersNumber(input) {

    // 커스텀 구분자 형식 검사
    const customDelimiterPattern = /^\/\/(.)\\n(.+)/;
    const match = input.match(customDelimiterPattern);
    Console.print(match)

    if (match) {
      
      // 커스텀 구분자 형식을 갖춘 경우
      const tokens = input.slice(2).split("\\n")
      const delimiter = new RegExp(tokens[0]) // 구분자를 정규식으로 변환
      const numberWithDelimiter = tokens[1] // 나머지 부분은 구분자를 포함한 숫자로 변환

      if (this.validateCustomDelimiters(numberWithDelimiter, delimiter)) {

        // 커스텀 구분자만 포함하고 있는 경우
        return input.split(delimiter).map(Number)

      } else {

        throw new Error("[ERROR] 커스텀 구분자 이외의 구분자가 발견되었습니다.")

      }
      
    } else {
      
      throw new Error("[ERROR] 커스텀 구분자 형식을 지키지 않았습니다.")
    
    }
  }

  // 커스텀 구분자만 포함하는지 검증하는 함수
  validateCustomDelimiters(input, delimiter) {

    const invalidParts = input.split(delimiter).filter((part) => isNaN(part));
    return invalidParts.length === 0; // 모든 파트가 숫자면 true 반환

  }

  // 기본 구분자만 포함하는지 검증하는 함수
  validateDefaultDelimiters(input) {

    const invalidChars = input.split("").filter((char) => !char.match(/[0-9,:\s]/));
    return invalidChars.length === 0; // 모든 파트가 숫자면 true 반환

  }
}

export default App;

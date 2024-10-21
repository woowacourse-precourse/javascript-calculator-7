const { Console } = require("@woowacourse/mission-utils");
class App {
  async run() {

    // 사용자 정의 구분자를 찾기 위한 정규 표현식
    const customDelimiterRegex = /^\/\/(.*?)\\n/;

    // 사용자로부터 입력을 받는 비동기 함수
    async function getUserInput() {
      return await Console.readLineAsync("덧셈할 숫자를 입력해 주세요.\n");
    }
    // 사용자 입력을 받고 검증 실행
    const userInput = await getUserInput();
    
    // 입력값에서 커스텀 구분자를 추출하는 함수
    function getCustomDelimiter(string, regex) {
      const match = string.match(regex);
      if (match) return match[1];
      return null;
    }

    // 커스텀 구분자와 수식 추출
    const customDelimiter = getCustomDelimiter(userInput, customDelimiterRegex);
    const formula = userInput.replace(customDelimiterRegex, "");

    }

    
}

export default App;

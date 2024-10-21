const { Console } = require("@woowacourse/mission-utils");
class App {
  async run() {

    // 사용자 정의 구분자를 찾기 위한 정규 표현식
    const customDelimiterRegex = /^\/\/(.*?)\\n/;


    // 에러 메시지 객체
    const errorMessages = {
          emptyInput: "입력 값이 없습니다.",
          negativeNumber: "음수는 지원하지 않습니다.",
          emptyCustomDelimiter: "커스텀 구분자가 없습니다.",
          invalidNumber: "숫자만 더할 수 있습니다.",
      };

    // 에러를 발생시키는 함수
    function throwError(errorMessage) {
          throw new Error(`[ERROR] ${errorMessage}`);
      }

    // 입력값이 비어있는지 확인하는 검증 함수
    const validateEmptyInput = (input) => {
          if (!input) throwError(errorMessages.emptyInput);
          return input;
      };

    // 입력값에 음수가 있는지 확인하는 검증 함수
    const validateNegativeInput = (input) => {
          if (/-\d/.test(input)) throwError(errorMessages.negativeNumber);
          return input;
      };

    // 커스텀 구분자가 비어있는지 확인하는 검증 함수
    const validateEmptyCustomDelimiter = (input) => {
          if (/^\/\/\\n/.test(input)) throwError(errorMessages.emptyCustomDelimiter);
          return input;
      };

    // 모든 입력 검증을 실행하는 함수
    const validateInput = (input) => {
          const validators = [validateEmptyInput, validateNegativeInput, validateEmptyCustomDelimiter];
          validators.forEach((validator) => {
              validator(input);
          });
          return input;
      };    


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


    // 수식에서 숫자를 추출하는 함수
    function extractNumbers(string, delimiter) {
      return string
          .split(delimiter)
          .map((s) => s.trim()) // 공백 제거
          .filter((s) => s !== ""); // 빈 문자열 제거
    }

    // 추출된 숫자 배열 생성
    const numbers = extractNumbers(formula, customDelimiter || /,|:/);
    
    // 값이 숫자인지 확인하는 함수
    const isNumber = (value) => !isNaN(value);

    // 숫자 검증 함수
    const validateExtractedNumbers = (numbers) => {
                numbers.forEach((n) => {
                    if (!isNumber(n)) throwError(errorMessages.invalidNumber);
                });
    };
    
    // 숫자 검증 실행
    validateExtractedNumbers(numbers);

    // 숫자 배열의 합을 계산하는 함수
    const sumNumbers = (numbers) => {
              return numbers.reduce((acc, val) => acc + parseInt(val), 0);
          };

    // 합계 계산 및 결과 출력
    const sum = sumNumbers(numbers);
    Console.print(`결과 : ${sum}`);
    }
    

    

    
}

export default App;

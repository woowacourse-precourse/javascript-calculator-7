import { Console } from "@woowacourse/mission-utils";

// 사용자 입력
async function getUserInputData() {
  const userInputData = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");  
  return userInputData;
}

// 숫자 추출
function extractNumber(userInputData) {
  return userInputData
}

// 숫자 연산
function calculator(numberArr) {
  return numberArr
}

// 예외 처리
function errorHandling() {

}

class App {
  async run() {
    const userInput = await getUserInputData();
    const result = calculator(extractNumber(userInput));

    Console.print("결과 : " + result.toString())
  }
}

export default App;

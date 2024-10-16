// 기능 구현 리스트
// 1. 입력하라고 알려주는 문구 출력하고 입력받은 문자열 저장하기 [O]
// 2. 맨 앞에 / 로 시작할 경우 커스텀 구분자 추출해서 저장하기 [X]
// 3. 구분자를 기준으로 숫자 나누기 [X]
// 4. 나눈 숫자 더하기 [X]
// 5. 결과값 출력하고 프로그램 종료하기 [X]
// 6. 예외 처리 [X]

import { readInput, printOutput } from './utils/inputOutputHandler.js';


class App {
  async run() {

    // 입력 받기
    let input = await readInput();

    // 출력 하기
    printOutput(input);
    
  }
}

export default App;

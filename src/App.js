// 기능 구현 리스트
// 1. 입력하라고 알려주는 문구 출력하고 입력받은 문자열 저장하기 [O]
// 2. 맨 앞에 / 로 시작할 경우 커스텀 구분자 추출해서 저장하기 [O]
// 3. 구분자를 기준으로 숫자 나누기 [O]
// 4. 나눈 숫자 더하기 [O]
// 5. 결과값 출력하고 프로그램 종료하기 [O]
// 6. 예외 처리 [O]

import { readInput, printOutput } from './utils/inputOutputHandler.js';
import { findDelimiters } from './utils/findDelimiters.js';
import { extractNumbers } from './utils/extractNumbers.js';
import { calculateNumbers } from './utils/calculateNumbers.js';


class App {
  async run() {

    // 입력 받기
    let input = await readInput();

    // 구분자 + 커스텀 구분자 추출
    const delimiters = findDelimiters(input);

    // 구분자 배열을 토대로 숫자 추출
    const numberArray = extractNumbers(input, delimiters);

    // 추출된 숫자 계산
    const result = calculateNumbers(numberArray);

    // 출력 하기
    printOutput(result);

  }
}

export default App;

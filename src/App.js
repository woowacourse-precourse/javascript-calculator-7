
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await this.getInput(); // 입력 메소드 사용
    try {
      const result = this.extractNumbers(input); // 숫자 추출 메소드 사용
      this.printResult(result); // 결과 출력 메소드 사용
    } catch (error) {
      this.handleError(error); // 에러 처리 메소드 사용
    }
  }

// 입력: 사용자에게 덧셈할 문자열을 입력받는 메소드
async getInput() {
  Console.print('덧셈할 문자열을 입력해 주세요.');
  return await Console.readLineAsync('');
}

// 숫자 추출: 구분자 분리 + 합 계산 메소드
extractNumbers(input) {

  if (!input) {
    throw new Error('입력값이 없습니다.'); 
  }

  // 기본 구분자
  let custom = ',:';  
  let sum = 0; 

  // 커스텀 구분자
  if(input.slice(0,2) === "//"){
    const customDelimiterEnd = input.indexOf('\\n');
    if (customDelimiterEnd === -1) {
       throw new Error('유효하지 않은 커스텀 구분자입니다.');
    }
    custom = input.slice(2, customDelimiterEnd);
    input = input.slice(customDelimiterEnd + 2);
  }

  // 구분자 분리
  const delimiter = new RegExp(`[${custom},:]+`);
  const result = input.split(delimiter);

  // 합 계산
  for (let i = 0; i < result.length; i++) {
    const current = result[i].trim();

    if (current === "") {
      sum += 0; 
    } else if (isNaN(current)){
      throw new Error('숫자만 입력 가능합니다.');
    } else if (current < 0){
      throw new Error('양수만 입력 가능합니다.');
    } else {
      sum += Number(current);
    }
  }

  return sum; 
}

// 출력: 덧셈 결과를 출력하는 메소드
printResult(result) {
  Console.print(`결과 : ${result}`); 
}

// 에러 처리: 사용자가 잘못된 값을 입력할 경우, "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키는 메소드
handleError(error) {
  Console.print(`[ERROR] ${error.message}`); 
}
}

export default App;

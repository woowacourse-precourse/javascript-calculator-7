import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

      if (input.length === 0) {
        MissionUtils.Console.print('결과 : 0');
        return;
      }

      //커스텀 구분자가 있는지 검사후 배열을 반환
      const { inputArr, delimiters } = this.parseInputToArray(input);

      // 유효한 입력값일 경우, 계산하는 메서드 를 실행
      if (this.isValid(inputArr, delimiters)) {
        this.calculate(inputArr);
      } else {
        MissionUtils.Console.print('[ERROR] 잘못된 값을 입력하셨습니다.');
        return;
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR]: ${error}`);
      return;
    }
  }
  
  isValid(inputArr, delimiters) {    
    const isValidInput = inputArr.every((str, idx) => {
      if (idx % 2 === 0) { 
        // 숫자인지 확인
        return !isNaN(parseFloat(str)) && isFinite(str); 
      } else { 
        // 구분자가 올바른지 확인
        return delimiters.includes(str);
      }
    });
  
    return isValidInput; 
  }
  
  
  //입력받은 input 을 배열로 바꿔주는 메서드
  parseInputToArray(input){
    const delimiters = [',', ':'];

    // 커스텀 구분자가 있는지 확인
    if (input.slice(0, 2) === '//') {
      for (let i = 2; i < input.length; i++) {
        if (input[i] === "\\" && input[i + 1] === "n") {
          const NEW_DELIMITER = input.slice(2, i);
          delimiters.push(NEW_DELIMITER);
          input = input.slice(i + 2);
          break;
        }
      }
    }

    let temp = '';
    const result = [];
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
    
      // char가 숫자인 경우
      if (typeof Number(char) === 'number' && !isNaN(Number(char)) && char !== ' ') {
        if (temp) {
          result.push(temp); 
          temp = '';
        }
        result.push(char);
      } 
      // char가 숫자가 아닌 경우
      else if (typeof char === 'string' && char !== ' ') {
        temp += char;
      }
    }
    
    // 마지막 temp가 비어있지 않으면 결과에 추가
    if (temp) {
      result.push(temp);
    }
    
   
    const combinedResult = [];
    let numberString = '';
    for (let j = 0; j < result.length; j++) {
      const current = result[j];
    
      // 현재 요소가 숫자인 경우
      if (!isNaN(current)) {
        numberString += current; 
      } else {
        if (numberString) {
          combinedResult.push(numberString);
          numberString = ''; 
        }
        combinedResult.push(current);
      }
    }
    
    // 마지막 숫자 문자열이 남아있으면 추가
    if (numberString) {
      combinedResult.push(numberString);
    }
    
    return { inputArr: combinedResult, delimiters }; 
  }


  // 입력값을 계산하는 메서드 
  calculate(inputArr) {
    // 숫자만 필터링
    const numbers = inputArr.filter((str, idx) => idx % 2 === 0).map(Number); 
  
    // 음수가 있는지 체크
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      MissionUtils.Console.print(`[ERROR] 음수의 값을 입력하셨습니다: ${negativeNumbers.join(', ')}`);
      return;
    }
  
    // 양수 합산
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
    // 최종 합산 결과 출력
    MissionUtils.Console.print(`결과: ${sum}`);
  }
  
  
}
export default App;

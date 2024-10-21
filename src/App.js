import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    // 사용자 입력 받기
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    try {
      const result = this.getInput(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  // 숫자 더하기 함수
  getInput(input) {
    if (!input) {
      throw new Error('숫자를 입력해주세요.'); // 입력이 없는 경우 처리
    }

    let sum = 0;

    // 1.//구분자\n 유형 확인
    var regs = /(\/\/)(\W)(\n)/.exec(input);
    if(regs != null){
      if(regs.length > 2){
        var g = regs[2];
        var list = input.split(g);
        list.forEach( m => {
          if(Number(m)!=NaN){
            sum += Number(m);
          }  
        })
        // 결과값 출력
        Console.print(`결과 : ${sum}`); // 출력할 결과
      } else {
        // error
        Console.print('올바르지 않은 문자열입니다.');
      }
    } else {
      // 2. 기본구분자
      /*
      regx = /(,|;|:\\|)/;
      const list = input.split(regx);

      // 구분자를 기준으로 문자열을 분리
      //const numbers = input.split(new RegExp(DELIMITER)).map(num => num.trim());
      console.log('1', list);
      if(list != null){
        list.forEach(num => {
          console.log('2', num)
          //const number = parseInt(num, 10);

          if (/[0-9]/.test(num)) { // 숫자인지 확인 (정규식 사용)
            sum += parseInt(num); // 숫자만 더하기
          }

        });

        // 결과값 출력
        Console.print(`결과 : ${sum}`); // 출력할 결과
      } else {
        throw new Error('구분자와 숫자가 포함되어 입력해주세요.'); // 입력이 없는 경우 처리
      }
*/
let DELIMITER = ',|:'; // 기본 구분자 쉼표와 콜론
// 구분자를 기준으로 문자열을 분리
const numbers = input.split(new RegExp(DELIMITER)).map(num => num.trim());

// 양수 확인 및 합계 계산
let sum = 0;

numbers.forEach(num => {
  const number = parseInt(num, 10);
  if (isNaN(number)) {
    throw new Error('숫자를 입력해주세요.'); // 숫자가 아닌 경우 처리
  }
  if (number < 0) {
    throw new Error('숫자는 양수만 가능합니다.'); // 양수가 아닌 경우 처리
  }
  sum += number;
});

// 결과값 출력
Console.print(`결과 : ${sum}`); // 출력할 결과
    }


  }
}

export default App;

import { Console } from '@woowacourse/mission-utils';

class App {
  //
  extractAndSum(input) {
  let CleanInput;

  //3.(커스텀 구분자 구분)
  let customDelimiter;
  if (input.startsWith('//')) {
    const delimiterEnd = input.indexOf('\n');
    customDelimiter = input.slice(2, delimiterEnd);  
    CleanInput = input.slice(delimiterEnd + 1);
}
  // 1.(숫자추출) 문자만 공백으로 치환.
  CleanInput = input.replace(/[^\d]/g, '');

  //2.(기본구분자 분리)
  const numbers = CleanInput.split(/\s+|[,:\-]/)
                            .filter(item => item.trim() !== '' && !isNaN(item))
                            .map(Number);


  // 4. 숫자의 합을 반환 : reduce(누적값, 현재요소 => 초기값) 각 요소를 순회하면서 누적값 계산
  return numbers.reduce((acc, num) => acc + num, 0);
  }

  // App 실행
  async run() {
    // 사용자로부터 덧셈할 문자열을 입력받음
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n ")
      .then(input => {
        const result = this.extractAndSum(input); // 입력 문자열에서 숫자를 추출하고 합산
        Console.print(`결과: ${result}`); // 결과 출력
      });
  }
}

const app = new App();
app.run();

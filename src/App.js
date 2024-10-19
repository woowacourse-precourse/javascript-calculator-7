import { Console } from '@woowacourse/mission-utils';

class App {
  //
  extractAndSum(input) {
    // 1. 문자열에서 숫자만을 추출한다.(문자나 공백등을 입력했을 경우를 고려)
    const numbers = input.match(/\d+/g).map(Number);

  





    
    //4. 숫자의 합을 반환 : reduce(누적값,현재요소=> 초기값) 각 요소를 순회하면서 누적 값을 계산함
    return numbers.reduce((acc, num) => acc+num, 0);
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

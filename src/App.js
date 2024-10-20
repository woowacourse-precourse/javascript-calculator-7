import { Console } from '@woowacourse/mission-utils';

class App {
  run() {
    Console.readLine('문자열을 입력하세요: ', (input) => {
      try {
        // 나중에 입력값을 처리할 로직이 추가될 예정
        const result = input; // 일단 입력값 그대로 출력
        Console.print(`=> ${result}`);
      } catch (error) {
        Console.print(error.message);
      } finally {
        Console.close();  // 콘솔 인터페이스 종료
      }
    });
  }
}

export default App;

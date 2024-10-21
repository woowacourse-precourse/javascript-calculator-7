import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('입력: ');
    let sort = /,|:/;
    let numbers = input;
    //커스텀 구분-예시 @
    // \\@\n2@3@6
    // @임을 알아내기
    const pattern_Custom = /\/\/(.*?)\\n/;

    const sort_Custom = input.match(pattern_Custom);

    if (sort_Custom) {
      sort = sort_Custom[1];
       // [0]= //@\n이니까  문자인 @이 나오게 1번째
      numbers = input.slice(sort_Custom[0].length);
    }
    const result = numbers.split(sort).map(Number);
    Console.print(result);
  }
}

export default App;

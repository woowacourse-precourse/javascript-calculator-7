import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    let SUM = 0;
    const SEPERATOR = [',', ':'];
    let INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    INPUT = INPUT.replace('\\n', '\n'); //테스트 케이스의 경우 \\n 형태로 들어오므로, 정규식 패턴으로 인식하려면 변환시켜줘야 함

    //  커스텀 구분자 찾기
    const CUSTOM_SEPERATOR_MATCH = INPUT.match(/^\/\/(.)\n/);

    if (CUSTOM_SEPERATOR_MATCH) {
      const CUSTOM_SEPERATOR = CUSTOM_SEPERATOR_MATCH[1]; //커스텀 구분자 저장
      INPUT = INPUT.split('\n')[1]; //숫자 부분만 남기기

      SEPERATOR.push(CUSTOM_SEPERATOR); //구분자 목록에 커스텀 구분자 삽입
    }

    const SEPERATOR_REGEX = new RegExp(`[${SEPERATOR.join('')}]`);

    // 구분자 목록에 있는 것들 기준으로 INPUT 자르기

    const NUMBERS = INPUT.split(SEPERATOR_REGEX).map(Number);

    NUMBERS.forEach((VAL) => {
      if (VAL < 0) {
        throw new Error('[ERROR]');
      } else {
        SUM += VAL;
      }
    })


    Console.print(`결과 : ${SUM}`); // 결과 출력
  }
}

export default App;
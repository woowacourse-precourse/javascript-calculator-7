import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const START_CUSTOM_SEPERATOR_SETTING = '//';
    const END_CUSTOM_SEPERATOR_SETTING = '\\n';

    // 결과값 변수
    let result = 0;

    // 사용자 입력값을 받는다.
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    // 구분자 설정 - 기본 구분자 쉼표(,), 콜론(:)
    let seperators = ',:';

    // 문자열에 커스텀 구분자가 있는지 판단
    if(input.startsWith('//')) {
      if(input.includes('\\n')){
        // 구분자 추출
        const customSeperator = input.slice(2, input.indexOf('\\n'));

        // 숫자 혹은 문자열인지 확인
        if(customSeperator.match(/^[0-9]$/) || customSeperator.length > 1) {
          throw new Error("[ERROR] 커스텀 구분자의 형식이 잘못되었습니다.");
        }

        // 구분자 문자열에 커스텀 구분자 추가
        seperators += customSeperator;
      }
    }

  }
  
}

export default App;
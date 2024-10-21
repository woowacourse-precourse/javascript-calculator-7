import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

      let customSeparator = '';

      // 커스텀 구분자가 있는 경우 등록
      if (input.includes('//') && input.includes('\\n')) {
        const CUSTOM_START_INDEX = input.indexOf('//') + 2;
        const CUSTOM_END_INDEX = input.indexOf('\\n');

        if (CUSTOM_START_INDEX < CUSTOM_END_INDEX) {
          customSeparator = input.substring(
            CUSTOM_START_INDEX,
            CUSTOM_END_INDEX,
          );
          if (customSeparator == '\\') customSeparator = '\\';
          input = input.replace('//', '');
          input = input.replace('\\n', '');
        }
      }

      // 구분자가 "-" 일 때, 맨 앞 숫자가 음수인 경우 처리
      if (input[0] === '-')
        throw new Error('[ERROR] 음수는 입력할 수 없습니다.');

      // 기본 제공 구분자 기준으로 문자열 나누기
      let splitInputArray = input.split(/[,:]/);

      // 배열 각 요소에서 커스텀 구분자 기준으로 문자열 나누기
      splitInputArray = splitInputArray.map((x) => x.split(customSeparator));
      splitInputArray = splitInputArray.flat();

      if (splitInputArray[0] === '') splitInputArray.shift(); // 커스텀 구분자를 맨 앞에서 지정한 경우 ""가 생기므로 제거

      // 각 배열의 인자가 올바른지 확인 및 숫자 타입으로 형 변환 시킴
      splitInputArray = splitInputArray.map((stringNumber) => {
        if (!Number(stringNumber)) {
          throw new Error('[ERROR] 올바르지 않은 구분자를 입력했습니다.');
        }
        if (Number(stringNumber) < 0) {
          throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
        }
        return Number(stringNumber);
      });

      // 나누어진 값들의 합을 구함
      const SUM = splitInputArray.reduce((acc, cur) => acc + cur, 0);

      MissionUtils.Console.print(`결과 : ${SUM}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;

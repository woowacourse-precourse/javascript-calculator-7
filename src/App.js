import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const WRITE = await Console.readLineAsync(
      "특별한 계산기입니다. 자유롭게 입력해주세요."
    );

    function Separator(WRITE) {
      const FIRST_ARR = WRITE.indexOf("//");
      const LAST_ARR = WRITE.indexOf("\n");

      // 커스텀 구분자 추출
      if (FIRST_ARR !== -1 && LAST_ARR !== -1 && FIRST_ARR < LAST_ARR) {
        const CUSTOME_SEPA = WRITE.slice(FIRST_ARR + 2, LAST_ARR).trim();
        return CUSTOME_SEPA;  // 커스텀 구분자 반환
      }

      return /,|:/;
    }

    const CUS_SEPARATOR = Separator(WRITE);

    //커스텀 구분자로 분리 전 '\\n'을 '\n'으로 반환
    const ADJUST_INPUT = WRITE.replace(/\\n/g, '\n');

    const SPLIT_STRING = strTest(ADJUST_INPUT, CUS_SEPARATOR);

    // 숫자가 아닌 값이나 음수를 체크
    SPLIT_STRING.forEach((value) => {
      if (isNaN(value) || Number(value) < 0) {
        throw new Error("[ERROR] 구분자와 0 이상 양수만 사용 가능합니다.");
      }
    });

    // 계산 결과 출력
    const SPECIAL_CALCULATOR = SPLIT_STRING.map(Number).reduce((a, b) => a + b);
    Console.print(`결과 : ${SPECIAL_CALCULATOR}`);
  }
}

export function strTest(input, CUS_SEPARATOR) {
  const lastIndex = input.indexOf("\n");
  const STRING_NUMBER = input.slice(lastIndex + 1).trim();

  const NUMBERS = STRING_NUMBER.split(new RegExp(`${CUS_SEPARATOR}|,|:`));

  return NUMBERS.filter(num => num.trim() !== "");
}


export default App;
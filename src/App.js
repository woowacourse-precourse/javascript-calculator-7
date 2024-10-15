import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    let input = await MissionUtils.Console.readLineAsync();
    let result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }
    calculate(input) {
      if (input === "") return 0;

      let delimiter = /[,][;]/;
      let newInput = input;

      if(input.startsWith("//")){
        let parts = input.split("\n");
        if(parts.length < 2){
          throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
        }

        let customDelimiter = parts[0].slice(2); // '//' 제거 후 ; 만 남게 된다.
        if (customDelimiter !== 1) {
          throw new Error("[ERROR] 커스텀 구분자는 하나의 문자만 됩니다.");
        }
        delimiter = new RegExp(`[${customDelimiter}]`);
        newInput = parts[1];
      }

      // 커스텀 구분자가 정의되었을 경우 기본 구분자 사용 금지
      if (/[,:]/.test(newInput)) {
        throw new Error("[ERROR] 커스텀 구분자 사용 시 기본 구분자는 허용되지 않습니다.");
      }

      const NUMBERS = newInput.split(delimiter).map((Number) => {
        if(isNaN(Number)) throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
        return Number(Number);
      });

      const minusNumbers = NUMBERS.filter((num) => num < 0);
      if(minusNumbers.length > 0){
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
      return NUMBERS.reduce((a,b) => a+b, 0);
    }
}

export default App;

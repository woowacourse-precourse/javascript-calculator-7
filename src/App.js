import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {

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

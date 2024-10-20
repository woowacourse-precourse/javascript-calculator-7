import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      Console.print("npm start로 인하여 프로그램이 시작되었습니다.");
      await this.checkSumCalcul();
      Console.print("정상 실행 완료 후 정상 종료되었습니다. 감사합니다.");
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      Console.error("[ERROR]", error);
    }
  }

  checkSumCalcul() {
    return new Promise((resolve, reject) => {
      Console.readLine("덧셈하고 싶은 양수를 입력해주세요 : ", (inputValue) => {
        const INPUT_VALUE = inputValue.replace(/[^\S\n]/g, "");

        const CUSTOM_PATTERN = /^\/\//;
        const IS_THIS_CUSTOM = CUSTOM_PATTERN.test(INPUT_VALUE);

        const EXTRACT_CUSTOM_DELI = (input) => {
          const WHAT_CUSTOM_DELI = input.match(/^\/\/(.+)\n/);
          if (!WHAT_CUSTOM_DELI) {
            reject(new Error("[ERROR] 유효한 커스텀 구분자가 아닙니다."));
            return [];
          }
          const CUSTOM_DELIMITER = WHAT_CUSTOM_DELI[1];
          const EXTRACT_NUMBERS = input.split("\n")[1];
          const CUSTOM_DELI_COMP = EXTRACT_NUMBERS.split(CUSTOM_DELIMITER);
          const CUSTOM_DELI_NUM_ARR = CUSTOM_DELI_COMP.map(Number);
          return CUSTOM_DELI_NUM_ARR;
        };

        const EXTRACT_GEN_DELI = (input) => {
          const GEN_DELI_COMP = input.split(/[,|;: ]+/);
          const GEN_DELI_NUM_ARR = GEN_DELI_COMP.map(Number);
          return GEN_DELI_NUM_ARR;
        };

        const SUM = (numbersArray) => {
          return numbersArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
        };

        if (IS_THIS_CUSTOM) {
          Console.print("🟢 커스텀구분자를 사용하셨습니다");
          const CUSTOM_NUMBER_ARRAY = EXTRACT_CUSTOM_DELI(INPUT_VALUE);
          const CUSTOM_RESULT = SUM(CUSTOM_NUMBER_ARRAY);
          Console.print("🔥 커스텀 구분자 최종 결과 :", CUSTOM_RESULT);
          resolve();
        } else {
          Console.print("🟢 일반구분자를 사용하셨습니다.");
          const GEN_NUMBER_ARRAY = EXTRACT_GEN_DELI(INPUT_VALUE);
          const GEN_RESULT = SUM(GEN_NUMBER_ARRAY);
          Console.print("🔥 일반 구분자 최종 결과 :", GEN_RESULT);
          resolve();
        }
      });
    });
  }
}

export default App;

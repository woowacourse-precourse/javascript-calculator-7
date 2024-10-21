import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, INITIAL_PRINT, SPACE } from "./constant.js";
import { addNumber, removeSeparator, customSeparator } from "./function.js";

class App {
  async run() {
    const input_data = await MissionUtils.Console.readLineAsync(INITIAL_PRINT); // 문자열을 입력 받는다.

    const [start_number_index, custom_separator] = customSeparator(input_data); // 커스텀 구분자가 있다면 커스텀 구분자를 찾는다.
    const string_data = input_data.slice(start_number_index); // 커스텀 구분자 이후의 문자열만을 다룬다.
    const number_list = removeSeparator(string_data, custom_separator).split(
      SPACE
    ); // 기본 구분자와 커스텀 구분자를 이용하여 문자열을 분리한다.
    const sum = addNumber(number_list); // 분리된 숫자들을 더한다.

    MissionUtils.Console.print(OUTPUT_MESSAGE + sum); // 결과를 출력한다.
  }
}

export default App;

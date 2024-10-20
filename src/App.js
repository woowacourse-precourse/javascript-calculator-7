import { Console } from "@woowacourse/mission-utils";
import { REGEX_CONSTANTS, ERROR_PREFIX } from "./constants.js";
import { get_sum_of_number } from "./util/number-utils.js";
import {
  divide_custom_string,
  get_numbers_from_string,
  is_custom_string,
  is_regular_string,
} from "./util/string-utils.js";

class App {
  #get_number_list(user_string) {
    if (is_custom_string(user_string)) {
      const { divider, number_area } = divide_custom_string(user_string);
      return get_numbers_from_string(number_area, divider);
    } else if (is_regular_string(user_string)) {
      return get_numbers_from_string(
        user_string,
        REGEX_CONSTANTS.REGULAR_DIVIDER_REGEX
      );
    } else {
      throw new Error(`${ERROR_PREFIX} 잘못된 값을 입력하셨습니다.`);
    }
  }

  async run() {
    const user_string = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (user_string == "") {
      Console.print("결과 : 0");
      return;
    }
    const num_list = this.#get_number_list(user_string);
    const result = get_sum_of_number(num_list);

    Console.print(`결과 : ${result}`);
  }
}

export default App;

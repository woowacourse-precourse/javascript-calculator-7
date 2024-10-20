import { Console } from "@woowacourse/mission-utils";
import { REGEX_CONSTANTS, ERROR_PROFIX } from "./constants";

class App {
  #is_custom_divider(user_string) {
    return REGEX_CONSTANTS.CUSTOM_REGEX.test(user_string);
  }

  #is_regular_divider(user_string) {
    return REGEX_CONSTANTS.REGULAR_REGEX.test(user_string);
  }

  #divide_custom_string(user_string) {
    const divider = user_string.match(REGEX_CONSTANTS.CUSTOM_DIVIDER_REGEX)[1];
    const number_area = user_string.replace(
      REGEX_CONSTANTS.CUSTOM_DIVIDER_REGEX,
      ""
    );

    return { divider, number_area };
  }

  #get_numbers_from_string(string, divider = ORIGIN_REGEX) {
    const divided_numbers = string.split(divider);
    const formatted_numbers = divided_numbers.map((num) => {
      const parsed = parseInt(num);

      if (isNaN(parsed))
        throw new Error(`${ERROR_PROFIX} 숫자가 아닌 값이 포함되어 있습니다.`);
      return parsed;
    });

    return formatted_numbers;
  }

  #get_number_list(user_string) {
    if (this.#is_custom_divider(user_string)) {
      const { divider, number_area } = this.#divide_custom_string(user_string);
      return this.#get_numbers_from_string(number_area, divider);
    } else if (this.#is_regular_divider(user_string)) {
      return this.#get_numbers_from_string(
        user_string,
        REGEX_CONSTANTS.REGULAR_DIVIDER_REGEX
      );
    } else {
      throw new Error(`${ERROR_PROFIX} 잘못된 값을 입력하셨습니다.`);
    }
  }

  #get_sum_of_number(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
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
    const result = this.#get_sum_of_number(num_list);

    Console.print(`결과 : ${result}`);
  }
}

export default App;

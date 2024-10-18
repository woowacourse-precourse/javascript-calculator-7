import { Console } from "@woowacourse/mission-utils";

const ORIGIN_REGEX = /,|:/;
const CUSTOM_REGEX = /\/\/(.*?)\\n.*/;
const CUSTOM_DIVIDER_REGEX = /\/\/(.*?)\\n/;

class App {
  #get_number_list(user_string) {
    let num_list;
    if (CUSTOM_REGEX.test(user_string)) {
      const divider = user_string.match(CUSTOM_DIVIDER_REGEX)[1];
      const number_area = user_string.replace(CUSTOM_DIVIDER_REGEX, "");
      num_list = this.#get_numbers_from_string(number_area, divider);
    } else if (ORIGIN_REGEX.test(user_string)) {
      num_list = this.#get_numbers_from_string(user_string, ORIGIN_REGEX);
    } else {
      throw new Error(`[ERROR] 잘못된 값이 입력되었습니다.`);
    }

    return num_list;
  }

  #get_numbers_from_string(string, divider = ORIGIN_REGEX) {
    const divided_numbers = string.split(divider);
    const formatted_numbers = divided_numbers.map((num) => parseInt(num));

    return formatted_numbers;
  }

  #get_sum_of_number(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }

  async run() {
    try {
      const user_string = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const num_list = this.#get_number_list(user_string);
      const result = this.#get_sum_of_number(num_list);
    } catch (error) {
      return error;
    }
  }
}

export default App;

import { REGEX_CONSTANTS, ERROR_PREFIX } from "../constants.js";

export function divide_custom_string(user_string) {
  const divider = user_string.match(REGEX_CONSTANTS.CUSTOM_DIVIDER_REGEX)[1];
  const number_area = user_string.replace(
    REGEX_CONSTANTS.CUSTOM_DIVIDER_REGEX,
    ""
  );

  return { divider, number_area };
}

export function get_numbers_from_string(string, divider = ORIGIN_REGEX) {
  const divided_numbers = string.split(divider);
  const formatted_numbers = divided_numbers.map((num) => {
    const parsed = parseInt(num);

    if (isNaN(parsed))
      throw new Error(`${ERROR_PREFIX} 숫자가 아닌 값이 포함되어 있습니다.`);
    return parsed;
  });

  return formatted_numbers;
}

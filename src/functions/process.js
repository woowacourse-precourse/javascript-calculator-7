import preprocess from "./preprocess.js";

export default function process(input) {
  // 문자열 전처리 과정
  let [string, custom] = preprocess(input);

  let seperator = [":", ","];
  // 커스텀이 존재할 경우 구분자로 포함시킴.
  if (custom != "") seperator.push(custom);

  let number_array = [];
  let number_string = "";

  for (const CHAR of string) {
    if (seperator.includes(CHAR)) {
      /* 구분자일 경우 */
      number_array.push(num_check(number_string));
      number_string = "";
    } else number_string += CHAR; /* 구분자가 아닐 경우 */
  }
  if (number_string != "") number_array.push(num_check(number_string));

  let sum = 0;
  for (const ELM of number_array) sum += ELM;
  return sum;
}

function num_check(value) {
  const VALUE = Number(value);
  if (VALUE == NaN) throw new Error("[ERROR] 숫자만 더할 수 있어요.");
  else if (VALUE < 0) throw new Error("[ERROR] 양수만 더할 수 있어요.");
  else return VALUE;
}

import sum from "./sum.js";

export default function slice(string, custom) {
  let seperator = [":", ","];
  // 커스텀이 존재할 경우 구분자로 포함시킴.
  if (custom != "") seperator.push(custom);

  let number_array = [];
  let number = "";

  console.log(string);
  for (const CHAR of string) {
    if (seperator.includes(CHAR)) {
      // 구분자일 경우
      number_array.push(number);
      number = "";
    } else {
      // 구분자가 아닐 경우
      number += CHAR;
      console.log(number);
    }
  }
  if (number != "") number_array.push(number);

  return sum(number_array); // 문자열을 구분자 기준으로 분리한 배열을 반환함.
}

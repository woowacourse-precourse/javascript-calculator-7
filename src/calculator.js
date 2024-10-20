/**
 * 전달받은 문자열 내에서 구분자를 통해 숫자를 추출한 후 덧셈한 값을 반환합니다.
 *
 * @param {string} operand - 입력받은 문자열입니다. 숫자와 구분자로 이루어져 있습니다.
 * @returns {number} 입력 문자열에 존재하는 숫자를 덧셈한 결과입니다.
 */
function calculator(operand) {
  let sum = 0;
  let checkNumber = operand;
  const SEPARATOR = [",", ":"];

  if (operand.startsWith("//")) {
    if (operand.startsWith("\\n", 3)) {
      SEPARATOR.push(operand.charAt(2));
      checkNumber = operand.substring(5);
    }
  }

  const regex = new RegExp(
    SEPARATOR.map((separator) =>
      separator.replace(/[-\/\\^$.*+?()[\]{}|]/g, "\\$&")
    ).join("|"),
    "g"
  );
  checkNumber = checkNumber.split(regex);

  for (let i = 0; i < checkNumber.length; i++) {
    if (isNaN(Number(checkNumber[i]))) {
      throw new Error("[ERROR] 구분자가 아니거나 숫자가 아닌 문자가 존재해요"); // 구분자를 제외한 문자가 숫자가 아닌 경우
    }
    sum += Number(checkNumber[i]);
  }

  return sum;
}

export default calculator;

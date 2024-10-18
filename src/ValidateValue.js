export function ValidateValue(DIVISIONVALUES) {
  for (const DIVISIONVALUE of DIVISIONVALUES) {
    if (DIVISIONVALUE.trim == "") {
      throw new Error("[ERROR] 구분자만 있고 숫자는 없습니다.");
    }
    if (isNaN(DIVISIONVALUE)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
    }
    if (parseInt(num, 10) < 0) {
      throw new Error("[ERROR] 음수 값이 포함되어 있습니다.");
    }
  }
}

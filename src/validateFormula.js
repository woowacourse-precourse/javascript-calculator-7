const validateFormula = (formula, delimiters) => {
  const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
  //-를 구분자로 지정하지 않았을 때 음수 처리
  if (delimiters.join('').indexOf('-') === -1 && /-(\d+)/.test(formula)) {
    throw new Error("[ERROR] 음수는 허용되지 않습니다.");
  }

  // 연속된 구분자 방지
  if (/([,;:!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|~`]){2,}/.test(formula)) {
    throw new Error("[ERROR] 구분자가 연속으로 사용되었습니다.");
  }

  //구분자와 숫자 이외의 문자가 들어갔는지 검사
  for (const char of formula) {
    if (!char.match(/\d/) && !delimiterRegex.test(char)) {
      throw new Error("[ERROR] 유효하지 않은 문자가 들어갔습니다.");
    }
  }

  return true;
}

export default validateFormula;
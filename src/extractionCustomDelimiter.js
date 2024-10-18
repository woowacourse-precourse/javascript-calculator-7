const extractionCustomDelimiter = (input, delimiters) => {
  const specialCharRegex = /^[!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|~`]+$/;
  let formula = input;
  //커스텀 구분자 정의를 시작했지만 \n을 사용하여 닫지 않은 경우
  if (input.indexOf('\\n') === -1) {
    throw new Error('[ERROR] 커스텀 구분자 정의를 마무리짓지 않았습니다.');
  }
  if (input.indexOf('\\n') > 0) {
    //다수의 커스텀 구분자를 index로 추출
    for (let indexEndDef; (indexEndDef = formula.indexOf('\\n')) !== -1;) {
      const customDelimiter = formula[indexEndDef - 1];
      //커스텀 구분자 정의 예외 처리(오직 1 개의 특수 문자만 허가)
      if (indexEndDef !== 3 || !specialCharRegex.test(customDelimiter)) {
        throw new Error('[ERROR] 커스텀 구분자 정의는 1 개의 특수 문자만 가능합니다.')
      }
      delimiters.push(customDelimiter);
      formula = formula.slice(indexEndDef + 2);
    }
  }
  return formula;
};

export default extractionCustomDelimiter;
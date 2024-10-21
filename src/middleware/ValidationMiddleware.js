import FormatValidationError from '../exception/FormatValidationError.js';

class ValidationMiddleware {
  constructor() {
    //커스텀 구분자 혹은 기본 구분자 세팅
    this.regexList = [/^\/\/([^0-9])\\n([0-9]+(\1[0-9]+)*)*$/, /^([0-9]+([,:][0-9]+)*)*$/];
  }
// 유효한 식인지 검사
  isValidExpression(expression) {
    return this.regexList.some((regex) => regex.test(expression));
  }

  next(context, next) {
    if (!this.isValidExpression(context.expression)) {
      throw new FormatValidationError();
    }
    next();
  }
}

export default ValidationMiddleware
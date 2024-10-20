import FormatValidationError from '../exception/FormatValidationError.js';

class ValidationMiddleware {
  constructor() {
    this.regexList = [/^\/\/([^0-9])\\n([0-9]+(\1[0-9]+)*)*$/, /^([0-9]+([,:][0-9]+)*)*$/];
  }

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
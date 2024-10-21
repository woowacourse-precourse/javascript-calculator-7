class FilterMiddleware {
  constructor() {
  }
//추출한 구분자를 토대로 새로운 정규표현식 생성
  makeRegularExpressionWithDelimiter(delimiter) {
    return new RegExp(`[${delimiter}]`)
  }

  next(context, next) {
    const { expression, delimiter } = context;
    const delimiterRegex = this.makeRegularExpressionWithDelimiter(delimiter);
    const numbers = expression.split(delimiterRegex).map(Number);
    context.result = numbers.reduce((acc, num) => acc + num, 0);
    next();
  }
}

export default FilterMiddleware;
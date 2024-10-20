class FilterMiddleware {
  constructor() {
  }

  makeRegularExpressionWithDelimiter(delimiter) {
    return new RegExp(`[${delimiter}]`)
  }

  next(context, next) {
    const { expression, delimiter } = context;
    const delimiterRegex = this.makeRegularExpressionWithDelimiter(delimiter);
    context.result = expression.split(delimiterRegex).map(Number).reduce((sum, num) => sum + num,
      0);
    next();
  }
}

export default FilterMiddleware;
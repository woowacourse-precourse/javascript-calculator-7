class DelimiterMiddleware {
  constructor() {
    this._defaultDelimiter = ",:"
  }

  // Custom Delimiter 사용하는가
  hasCustomDelimiter(expression) {
    return expression.startsWith("//") || expression.includes("\\n");
  }

  //Custom Delimiter 추출
  extractCustomDelimiter(expression) {
    return expression.replace("//", "").split("\\n");

  }

  next(context, next) {
    try {
      const { expression } = context;
      if (!this.hasCustomDelimiter(expression)) context.delimiter = this._defaultDelimiter;
      else {
        const [customDelimiter, expressionPart] = this.extractCustomDelimiter(expression);
        context.expression = expressionPart;
        context.delimiter = customDelimiter;
      }
    } finally {
      next();
    }
  }
}

export default DelimiterMiddleware
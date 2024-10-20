class DelimiterMiddleware {
  constructor() {
    this._defaultDelimiter = ",:"
  }

  hasCustomDelimiter(expression) {
    return expression.startsWith("//") || expression.includes("\\n");
  }

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
const CalculateUtil = {
  parseInput(input) {
    const separator = [",", ":"];
    const re = /(\/\/).+(\\n)/;

    if (input.match(re)) {
      input
        .substring(2, input.indexOf("\\"))
        .split("")
        .map((sep) => separator.push(sep));
      const expression = input.substring(input.indexOf("n") + 1);
      return { separator, expression };
    }

    const expression = input;
    return { separator, expression };
  },

  sumExpression(separator, expression) {
    const regex = new RegExp(`${separator.join("|")}`, "g");
    const numbers = expression.split(regex);
    return numbers.reduce((acc, numString) => acc + Number(numString.trim()), 0);
  },
};

export default CalculateUtil;

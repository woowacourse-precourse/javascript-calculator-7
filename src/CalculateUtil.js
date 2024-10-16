const CalculateUtil = {
  parseInput(input) {
    const re = /(\/\/).+(\\n)/;
    if (input.match(re)) {
      const separator = input.substring(2, input.indexOf("\\")).split("");
      const expression = input.substring(input.indexOf("n") + 1);
      return { separator, expression };
    }
    const separator = [",", ":"];
    const expression = input;
    return { separator, expression };
  },
};

export default CalculateUtil;

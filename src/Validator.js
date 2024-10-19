class Validator {
  isInValid(input, separatorList) {
    if (input.startsWith("//")) {
      const lineBreakStringIndex = input.indexOf("\\n");

      if (lineBreakStringIndex !== 3) {
        return true;
      }

      const customSeparator = input[2];

      if (
        separatorList.includes(customSeparator) ||
        Number.isInteger(Number(customSeparator))
      ) {
        return true;
      }

      separatorList.push(input[2]);

      input = input.substring(5);
    }

    if (
      input.replaceAll(new RegExp(`[${separatorList.join("")}0-9]`, "g"), "")
        .length !== 0
    ) {
      return true;
    }

    function generateDelimiterCombinations(
      delimiters,
      minLength = 2,
      maxLength = 3
    ) {
      const result = [];

      function backtrack(combination, start) {
        if (combination.length >= minLength) {
          result.push(combination.join(""));
        }

        if (combination.length === maxLength) {
          return;
        }

        for (let i = 0; i < delimiters.length; i++) {
          backtrack([...combination, delimiters[i]], i);
        }
      }

      backtrack([], -1);
      return result;
    }

    const combinations = generateDelimiterCombinations(separatorList);

    let isInValid = false;
    combinations.forEach((combination) => {
      if (input.includes(combination)) {
        isInValid = true;
        return;
      }
    });

    return isInValid;
  }
}

export default Validator;

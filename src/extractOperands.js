const extractOperands = (formula, delimiters) => {
  //구분자를 기준으로 split
  const delimitersRegex = new RegExp(`[${delimiters.join('')}]`);
  const operands = formula.split(delimitersRegex);
  return operands;
}

export default extractOperands;
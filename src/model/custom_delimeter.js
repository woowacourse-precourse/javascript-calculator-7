export const isHaveCustomDelimiter = (input) => {
  if (input.startsWith("//") && input.indexOf("\\n") !== -1) {
    return true;
  }
  return false;
};

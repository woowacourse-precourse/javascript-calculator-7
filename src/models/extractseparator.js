const EXTRACTSEPARTOR = function extractSeparator(input) {
  if (input.startsWith("//")) {
    const SEPARATORENDINDEX = input.indexOf("\n");
    if (SEPARATORENDINDEX !== -1) {
      return input.substring(2, SEPARATORENDINDEX);
    }
  }
  return /[,:]/;
};

export default extractSeparator;

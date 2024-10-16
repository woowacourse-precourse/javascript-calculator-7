const EXTRACTSEPARTOR = function extractSeparator(input) {
  if (input.startsWith("//")) {
    const SEPARATORENDLNDEX = input.indexOf("\n");
    if (SEPARATORENDLNDEX !== -1) {
      return input.substring(2, SEPARATORENDLNDEX);
    }
  }
  return /[,:\n]/;
};

export default extractSeparator;

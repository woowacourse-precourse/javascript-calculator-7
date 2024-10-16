const extractSeparator = function extractSeparator(input) {
  if (input.startsWith("//")) {
    const separatorEndIndex = input.indexof("\n");
    if (separatorEndIndex !== -1) {
      return input.substring(2, separatorEndIndex);
    }
  }
  return /[,:\n]/;
};

export default extractSeparator;

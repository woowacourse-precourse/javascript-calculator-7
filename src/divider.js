export function extractCustomDvider(input) {
  const startComment = input.indexOf("//");
  const endComment = input.indexOf("\n");

  if (startComment == 0 && endComment !== -1) {
    const extractedString = input.substring(startComment + 2, endComment).trim();
    const newInput = input.substring(endComment + 1);
    return { extractedString, newInput };
  }
  
  return { extractedString: "", newInput: input };
}
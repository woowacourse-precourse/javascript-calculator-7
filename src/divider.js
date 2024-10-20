export function extractDividerProcess(input, divider) {
  while (input !== "") {
    const { extractedString, newInput } = extractCustomDvider(input);
    if (extractedString === "") {
      break;
    }
    divider.push(extractedString);
    input = newInput;
  }
  return { updatedInput: input, updatedDivider: divider };
}

function extractCustomDvider(input) {
  input = input.replace("\\n", "\n");
  const startComment = input.indexOf("//");
  const endComment = input.indexOf("\n");

  if (startComment == 0 && endComment !== -1) {
    const extractedString = input.substring(startComment + 2, endComment).trim();
    const newInput = input.substring(endComment + 1);
    return { extractedString, newInput };
  }
  
  return { extractedString: "", newInput: input };
}


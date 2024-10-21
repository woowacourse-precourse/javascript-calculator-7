import { EMPTY_STRING, ERROR_MESSAGE, MINUS_STRING } from "./message.js";

export function extractDividerList(input, dividerList) {
  while (input !== EMPTY_STRING) {
    const { extractedString, newInput } = extractCustomDvider(input);
    if (extractedString === EMPTY_STRING) {
      break;
    }
    repetitionCheck(dividerList);
    dividerList.push(extractedString);
    input = newInput;
  }

  return { updatedInput: input, updatedDividerList: dividerList };
}

function extractCustomDvider(input) {
  input = input.replace("\\n", "\n");
  const startComment = input.indexOf("//");
  const endComment = input.indexOf("\n");

  if (startComment == 0 && endComment !== -1) {
    const extractedString = input.substring(startComment + 2, endComment).trim();
    const newInput = input.substring(endComment + 1);

    validateDivider(extractedString);

    return { extractedString, newInput };
  }
  
  return { extractedString: EMPTY_STRING, newInput: input };
}

function validateDivider(divider) {
  if (divider === EMPTY_STRING) {
    throw new Error(ERROR_MESSAGE.NO_DIVIDER);
  }
  if (divider[0] === MINUS_STRING && divider.length > 1 && !isNaN(divider[1])) {
    throw new Error(ERROR_MESSAGE.NEGATIVE_DIVIDER);
  }

  if (!isNaN(divider[0])) {
    throw new Error(ERROR_MESSAGE.NUMBER_DIVIDER);
  }
  return;
}

function repetitionCheck(dividerList, extractedString) {
  if (dividerList.includes(extractedString)) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_DIVIDER);
  }
  return;
}
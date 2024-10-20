export function extractDividerProcess(input, divider) {
  while (input !== "") {
    const { extractedString, newInput } = extractCustomDvider(input);
    if (extractedString === "") {
      break;
    }
    repetitionCheck(divider);
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

    validateDivider(extractedString);

    return { extractedString, newInput };
  }
  
  return { extractedString: "", newInput: input };
}

function validateDivider(divider) {
  if (divider === "") {
    throw new Error("[ERROR] 커스텀 구분자에 문자열이 없습니다.");
  }
  if (divider[0] === '-' && divider.length > 1 && !isNaN(divider[1])) {
    throw new Error("[ERROR] 커스텀 구분자가 음수로 시작되고 있습니다.");
  }

  if (!isNaN(divider[0])) {
    throw new Error("[ERROR] 커스텀 구분자가 숫자로 시작되고 있습니다.");
  }
  return;
}

function repetitionCheck(divider, extractedString) {
  if (divider.includes(extractedString)) {
    throw new Error("[ERROR] 구분자가 중복되었습니다.");
  }
  return;
}
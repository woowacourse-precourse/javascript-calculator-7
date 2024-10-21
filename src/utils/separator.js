export async function extractCustomSeparator(userInputValue){
  const customDelimiterPattern = /^\/\/(.)\\n/;
  let separators = [",", ":"];

  const customSeparatorMatch = userInputValue.match(customDelimiterPattern);
  if (customSeparatorMatch) {
    separators.push(customSeparatorMatch[1]);
    userInputValue = userInputValue.substring(customSeparatorMatch[0].length);
  }

  return { separators, inputWithoutSeparator: userInputValue };
}

export function splitSeparator(separators, userInputValue) { 
  const delimiterRegex = new RegExp(`[${separators.join("")}]`);
  return userInputValue.split(delimiterRegex).filter(Boolean);
}
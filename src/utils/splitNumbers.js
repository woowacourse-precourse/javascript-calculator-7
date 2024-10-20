export default function splitNumbers(separators, userInputValue) { 
  const delimiterRegex = new RegExp(`[${separators.join("")}]`);
  return userInputValue.split(delimiterRegex).filter(Boolean);
}
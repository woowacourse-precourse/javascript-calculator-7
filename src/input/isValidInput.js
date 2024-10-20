export default function isValidInput(cleanedString, customDelimiter) {
  let regex;
  if (customDelimiter !== null) {
    regex = new RegExp(`^[0-9,;${customDelimiter}]+$`);
  } else {
    regex = /^[\\d,;]+$/;
  }
  return regex.test(cleanedString);
}
function isFirstCharNumber(str) {
  const firstChar = str.charAt(0);
  return !Number.isNaN(firstChar);
}

function replaceCommaOrClone(str) {
  return str.replaceAll(',', ' ').replaceAll(':', ' ');
}

function parseCustomNumber(str) {
  const customDelimiterPattern = /^\/\/(.)\n/;
  const isCustomDelimiter = str.match(customDelimiterPattern);
}
function parseNormalNumber(str) {
  const replacedString = replaceCommaOrClone(str);

  if (replacedString.length === 0) return 0;
  return replacedString
    .split(' ')
    .map(number => Number(number))
    .reduce((acc, curr) => acc + curr);
}
function checkAndChooseParsingStat(str) {
  if (!isFirstCharNumber(str)) {
    return parseCustomNumber(str);
  }
  return parseNormalNumber(str);
}

// console.log(checkAndChooseParsingStat(''));
// console.log(checkAndChooseParsingStat('1,2'));
// console.log(checkAndChooseParsingStat('1,2,3'));
// console.log(checkAndChooseParsingStat('1,2:3'));

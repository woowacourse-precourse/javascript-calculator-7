function isFirstCharNumber(str) {
  const firstChar = str.charAt(0);
  return !Number.isNaN(firstChar);
}

function replaceCommaOrClone(str) {
  return str.replaceAll(',', ' ').replaceAll(':', ' ');
}
function checkFormattingIsValid(replacedString, splitter) {
  // 기본 구분자는 ':'와 ','이며, 커스텀 구분자가 제공되면 그걸 사용합니다.
  const splitters = splitter ? [splitter] : [':', ','];

  // 구분자를 기준으로 문자열을 분리합니다.
  const splitString = replacedString.split(
    new RegExp(`[${splitters.join('')}]`),
  );

  // 숫자인 요소들의 개수를 셉니다.
  const numberCount = splitString.filter(
    element => !isNaN(Number(element.trim())),
  ).length;

  // 공백이 있는 요소들의 개수를 셉니다.
  const spaceCount = splitString.filter(
    element => element.trim() === '',
  ).length;

  console.log(splitString);
  console.log(`numberCount: ${numberCount}, spaceCount: ${spaceCount}`);

  // 숫자 개수가 공백 개수보다 정확히 1개 많으면 true를 반환합니다.
  return numberCount === spaceCount + 1;
}

function parseCustomNumber(str) {
  const customDelimiterPattern = /^\/\/(.)\n/;
  const isCustomDelimiter = str.match(customDelimiterPattern);
}
function parseNormalNumber(str) {
  const replacedString = replaceCommaOrClone(str).split('');
  if (replacedString.length === 0) return 0;

  if (!isValid(replacedString)) {
    console.log('No!');
    return;
  }
  return replacedString
    .map(number => Number(number))
    .reduce((acc, curr) => acc + curr);
}
function checkAndChooseParsingStat(str) {
  if (!isFirstCharNumber(str)) {
    return parseCustomNumber(str);
  }
  return parseNormalNumber(str);
}

console.log(checkAndChooseParsingStat(''));
console.log(checkAndChooseParsingStat('1,2'));
console.log(checkAndChooseParsingStat('1,2,3'));
console.log(checkAndChooseParsingStat('1123414::,::,124::,,,:::124,2:3'));

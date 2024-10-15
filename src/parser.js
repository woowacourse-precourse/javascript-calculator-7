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

  // 숫자 수를 셉니다.
  const numberCount = splitString.filter(
    element => !isNaN(Number(element.trim())) && element.trim() !== '',
  ).length;

  // splitter의 수는 split한 결과에서 나온 배열 길이에서 1을 뺀 값이 됩니다.
  const splitterCount = splitString.length - 1;

  console.log(`numberCount: ${numberCount}, splitterCount: ${splitterCount}`);

  // 숫자 수가 splitter 수보다 정확히 1개 많으면 true를 반환합니다.
  return numberCount === splitterCount + 1;
}

function getCustomDelimiter(str) {
  const customDelimiterPattern = /^\/\/(.)\n/;
  const isCustomDelimiter = str.match(customDelimiterPattern);

  // 매칭되지 않으면 false를 반환
  if (!isCustomDelimiter) {
    return false;
  }

  // 매칭되면 캡처된 구분자를 반환
  return isCustomDelimiter[1];
}
function parseNormalNumber(str) {
  const replacedString = replaceCommaOrClone(str).split('');
  if (replacedString.length === 0) return 0;

  if (!checkFormattingIsValid(str)) {
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
console.log(parseCustomNumber('//;\n1;2;3'));

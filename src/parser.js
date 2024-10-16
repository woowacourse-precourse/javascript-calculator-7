import { Console } from '@woowacourse/mission-utils';
import parseCustomInput from './parseCustomInput';

// 에러를 출력하는 함수
function handleError(error) {
  Console.print(`[ERROR]: ${error.message}`);
}

function isFirstCharNumber(str) {
  if (str.length === 0) throw new Error('입력된 문자열이 비어 있습니다.');
  return !isNaN(str[0]); // 첫 번째 문자가 숫자인지 여부 확인
}

function replaceCommaOrClone(str) {
  return str.replaceAll(',', ' ').replaceAll(':', ' ');
}

function checkFormattingIsValid(str, splitter) {
  if (!str) {
    throw new Error('입력된 문자열이 비어 있습니다.');
  }

  const splitters = splitter ? [splitter] : [':', ','];
  const splitString = str.split(new RegExp(`[${splitters.join('')}]`));

  const numberCount = splitString.filter(
    element => !isNaN(Number(element.trim())) && element.trim() !== '',
  ).length;

  const splitterCount = splitString.length - 1;
  const hasConsecutiveSplitters = splitString.some(
    element => element.trim() === '',
  );

  Console.print(`numberCount: ${numberCount}, splitterCount: ${splitterCount}`);

  if (numberCount !== splitterCount + 1 || hasConsecutiveSplitters) {
    throw new Error('잘못된 포맷입니다. 숫자와 구분자의 형식이 맞지 않습니다.');
  }

  return true;
}

function getCustomDelimiter(str) {
  const customDelimiterPattern = /^\/\/(.)\n/;
  const isCustomDelimiter = str.match(customDelimiterPattern);

  if (!isCustomDelimiter) {
    throw new Error('커스텀 구분자가 잘못되었거나 존재하지 않습니다.');
  }

  return isCustomDelimiter[1];
}

function parseNormalNumber(str) {
  const replacedString = replaceCommaOrClone(str).split('');
  if (replacedString.length === 0) return 0;

  if (!checkFormattingIsValid(str)) {
    throw new Error('잘못된 포맷입니다.');
  }

  return replacedString
    .map(number => Number(number))
    .reduce((acc, curr) => acc + curr);
}

function parseCustomNumber(str) {
  const customDelimiter = getCustomDelimiter(str);

  if (!checkFormattingIsValid(str, customDelimiter)) {
    throw new Error('커스텀 구분자 포맷이 잘못되었습니다.');
  }

  const resultString = str.slice(4).split(customDelimiter);

  return resultString
    .map(number => Number(number))
    .reduce((acc, curr) => acc + curr);
}

function checkAndChooseParsingStat(str) {
  try {
    if (!isFirstCharNumber(str)) {
      return parseCustomNumber(str);
    }
    return parseNormalNumber(str);
  } catch (error) {
    handleError(error);
    return null;
  }
}

// 사용자 입력을 받고 처리하는 함수
function getUserInput() {
  Console.readLineAsync('숫자를 입력하세요: ', input => {
    const result = checkAndChooseParsingStat(input);
    if (result !== null) {
      Console.print(`결과: ${result}`);
    }
    Console.close();
  });
}

// 프로그램 실행
getUserInput();

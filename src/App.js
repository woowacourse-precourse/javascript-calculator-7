import { readFileSync } from 'fs';
import readline from 'readline';
import { Console } from "@woowacourse/mission-utils";

// 1. 입출력 기능 -  입력 : '덧셈할 문자열을 입력해 주세요.\n', 한 줄로 입력받기
async function getString() {
  try {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return input;
  } catch (err) {
    throw new Error('[ERROR]');
  }
}

// 커스텀 구분자 찾기
function findCustomSeparators(input) {
  const customSeparators = [];
  const regExp = /\/\/(.*?)\\n/g;
  let match;

  while ((match = regExp.exec(input)) !== null) { 
    customSeparators.push(match[1].trim());
  }
  return customSeparators;
}

// 구분자를 중심으로 문자열 파싱하기
function splitString(input, separators) {
  let numberArray = [input];

  separators.forEach(separator => {
    numberArray = numberArray.flatMap(item => item.split(separator));
  });
  return numberArray;
}

// 숫자 더하기
function sum(numberArray) {
  var output = 0;
  
  numberArray.map((value, index) => {
    if ((!Number(value) && value.length >= 1) || Number(value) < 0)
      throw new Error('[ERROR]');
    else {
      output += Number(value);
    }
  })
  return output;
}

class App {
  async run() {
    try {
      const input = await getString();

      var separators = [',', ':', '\//', '\\n', ...findCustomSeparators(input)];
      var tempString = input.trim();

      const numberArray = splitString(tempString, separators);
      const result = sum(numberArray);

      // 결과 출력
      Console.print(`결과 : ${result}`);
      return;
    } catch(err) {
      throw err;
    }
  }
}

export default App;
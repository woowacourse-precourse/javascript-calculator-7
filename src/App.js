import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    const [seperatorSet, filteredInput] = this.handleCustomSeperator(input);

    const extractedNumbers = this.extractPositiveNumbers(filteredInput, ...seperatorSet);

    const sum = this.sumArray(...extractedNumbers);
    
    this.print(sum);
  }

  handleCustomSeperator(input){
    const defaultSeperator = [':', ','];
    const customSeperatorChunksRegex = /^(\/\/.\\n)+/g;
    const customSeperatorRegex = /\/\/(.)\\n/g;

    const customSeperatorChunks = customSeperatorChunksRegex.exec(input)?.at(0);
    const customSeperatorMatch = customSeperatorChunks?.match(customSeperatorRegex);

    if(customSeperatorMatch === null || customSeperatorMatch === undefined){
      const seperatorSet = new Set(defaultSeperator);
      return [seperatorSet, input];
    } 

    const customSeperator = customSeperatorMatch.map((match) => match[2]);
    const seperatorSet = new Set([...defaultSeperator, ...customSeperator]);
    const filteredInput = input.slice(customSeperatorChunks.length);    

    return [seperatorSet, filteredInput];
  }

  extractPositiveNumbers(input, ...seperatorArray){
    const extractedNumbers = [];

    const seperatorRegex = new RegExp(`[${seperatorArray.join('|')}]`, 'g');
    const words = input.split(seperatorRegex);

    const isValidInput = words.every((word) => {
      const number = Number(word);

      if(isNaN(number) || number <= 0){
        return false;
      }
      return true;
    })
    
    if(!isValidInput){
      throw new Error('[ERROR] 올바른 구분자가 아니거나, 양의 정수가 아닌 값이 포함되어 있습니다.');
    } else {
      extractedNumbers.push(...words.map((word) => Number(word)));
    }

    return extractedNumbers;
  }

  sumArray(...numbers){
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  print(value){
    MissionUtils.Console.print(`결과 : ${value}`);
  }
}

export default App;

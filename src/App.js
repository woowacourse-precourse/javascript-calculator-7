import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const {seperatorSet, filteredInput} = this.handleCustomSeperator(input);
    const extractedNumbers = this.extractPositiveNumbers(filteredInput, ...seperatorSet);
    const sum = this.sumArray(...extractedNumbers);
    
    this.print(sum);
  }

  extractCustomSeperator(input){
    const customSeperatorChunksRegex = /^(\/\/.\\n)+/g;
    const customSeperatorRegex = /\/\/(.)\\n/g;

    const customSeperatorChunks = customSeperatorChunksRegex.exec(input)?.[0];

    if(customSeperatorChunks === null || customSeperatorChunks === undefined){
      return {customSeperator: [], filteredInput: input};
    }

    const customSeperatorMatch = customSeperatorChunks.match(customSeperatorRegex);
    const customSeperator = customSeperatorMatch ? customSeperatorMatch.map((match) => match[2]) : [];
    const filteredInput = input.slice(customSeperatorChunks.length);

    return {customSeperator, filteredInput};
  }

  handleCustomSeperator(input){
    const defaultSeperator = [':', ','];
    const {customSeperator, filteredInput} = this.extractCustomSeperator(input);
    const seperatorSet = new Set([...defaultSeperator, ...customSeperator]);

    return {seperatorSet, filteredInput};
  }

  extractPositiveNumbers(input, ...seperatorArray){
    const seperatorRegex = new RegExp(`[${seperatorArray.join('|')}]`, 'g');
    const words = input.split(seperatorRegex);

    const extractedNumbers = words.map((word) => {
      const number = Number(word);

      if(isNaN(number) || number <= 0){
        throw new Error('[ERROR] 올바른 구분자가 아니거나, 양의 정수가 아닌 값이 포함되어 있습니다.');
      }
      return number;
    })

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

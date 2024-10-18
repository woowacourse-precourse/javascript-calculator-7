import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const [seperatorSet, filteredInput] = this.handleCustomSeperator(input);    
    const extractedNumbers = this.extractPositiveNumbers(filteredInput, ...seperatorSet);
    const sum = this.sumArray(...extractedNumbers);
    /**
     * @TODO 덧셈 결과 출력
     */
  }

  handleCustomSeperator(input){
    const seperatorSet = new Set([':', ',']);
    const regex = /\/\/(.)\\n/g;
    let matchData = null;
    let lastIndex = 0;

    while((matchData = regex.exec(input)) !== null){
      const customSeperator = matchData[0][2];

      seperatorSet.add(customSeperator);
      lastIndex = matchData.index + matchData[0].length;
    }

    const filteredInput = input.slice(lastIndex);
    
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
}

export default App;

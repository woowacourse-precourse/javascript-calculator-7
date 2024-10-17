import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    
    const [seperatorSet, filteredInput] = this.handleCustomSeperator(input);
    const [isValidInput, errorMessage] = this.validateInputWithErrorMessage(filteredInput, ...seperatorSet);

    if(isValidInput){
      // 양수 추출 후 덧셈 로직 추가
    } else {
      throw new Error(errorMessage);
    }
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

  setErrorMessage(index, char){
    let errorMessage = `[ERROR] `;

    if(this.isEven(index)){
      errorMessage += `${char}는 양의 정수가 아닙니다.`;
    } else if(this.isOdd(index)){
      errorMessage += `${char}는 유효한 구분자가 아닙니다.`
    }
    
    return errorMessage;
  }

  validateInputWithErrorMessage(input, ...seperators){
    const seperatorSet = new Set(seperators);
    let errorMessage;

    const isValidInput = [...input].every((char, index) => {
      let isEvenIndexPositiveNumber = this.isEven(index) && this.isPositiveNumber(char);
      let isOddIndexInSeperatorSet = this.isOdd(index) && seperatorSet.has(char);
      
      let isValidInput = isEvenIndexPositiveNumber || isOddIndexInSeperatorSet;

      if(!isValidInput){
        errorMessage = this.setErrorMessage(index, char);
        return false;
      }
      return true;
    })

    return [isValidInput, errorMessage];
  }

  isPositiveNumber(char){
    return isNaN(char) === false && Number(char) > 0;
  }

  isEven = (num) => num % 2 === 0;
  isOdd = (num) => num % 2 === 1;

}

export default App;

import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    
    const [seperatorSet, filteredInput] = this.handleCustomSeperator(input);
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
}

export default App;

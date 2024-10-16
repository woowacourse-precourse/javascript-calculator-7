import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const Console = MissionUtils.Console;
    const separators = [',', ':'];
    let userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    while (userInput.startsWith('//')) {
      const end = userInput.indexOf('\\n');
      if (end === -1) break
      const newSeparator = userInput.slice(2,end);
      separators.push(newSeparator);
      userInput = userInput.slice(end+2)
    }

    let numbers = separators.reduce((acc, separator) => {
      return acc.flatMap(item => item.split(separator));
    }, [userInput]);

    numbers = numbers.map(Number);    
    const resultSum = numbers.reduce((acc, curr) => acc + curr, 0);

    Console.print(`결과 : ${resultSum}`);
  }
}

export default App;
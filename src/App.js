import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  splitLine(text) {
    const IS_HAVE_DELIMITER = /^\/\/.+\\n/;
    let delimiter_line = '';
    let number_line = '';

    if (IS_HAVE_DELIMITER.test(text)) {
      [delimiter_line, number_line] = text.split('\\n');
      
      return { delimiter_line, number_line };
    }
    number_line = text;

    return { delimiter_line, number_line };
  }
  
  async run() {
    try {
      const INPUT_DATA = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.splitLine(INPUT_DATA);
      MissionUtils.Console.print(result);
      
    } catch (error) {
      MissionUtils.Console.print(error);  
    }  
  }
}

export default App;
import {readLineAsync, print} from "./MissionUtils.js";

class App {
  async run() {
    const answer = await readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if(answer === "") {
      this.printResult(0);
      return;
    }

    const isCustom = this.isCustomDelimiter(answer);
    let customDelimiter = "";

    if(isCustom) {
      customDelimiter = this.getCustomDelimiter(answer);
    } 

  }
  
  isCustomDelimiter(str) { 
    const test = new RegExp(/^\/\/(.*?)\\n/,'g').test(str);
    return str.includes("//") && str.includes("\\n") && test; 
  }

  getCustomDelimiter(str) {
    return str.slice(str.indexOf("//") + 2, str.indexOf("\\n"));
  }

  printResult(result) {
    print('결과 : ' + result);
  }
}


export default App;

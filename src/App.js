import {readLineAsync, print} from "./MissionUtils.js";

class App {
  async run() {
    try {
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

      const delimiters = ":|,|" + customDelimiter;

      if(this.checkErrorOfAnswer(answer, delimiters)) {
        throw new Error("잘못된 값을 입력하였습니다. 다시 입력해주세요.");
      }

      let sum = 0;
      this.getNumbers(answer, isCustom, delimiters).forEach(item => {
        sum += parseInt(item, 10);
      });

      if(sum === NaN) throw new Error("잘못된 값을 입력하였습니다. 다시 입력해주세요.");
      this.printResult(sum);

    } catch (error) {
      print('[ERROR] : ' + error.message);
      return;
    }
    
  }

  printResult(result) {
    print('결과 : ' + result);
  }

  // 커스텀 여부 확인
  isCustomDelimiter(str) { 
    const test = new RegExp(/^\/\/(.*?)\\n/,'g').test(str);
    return str.includes("//") && str.includes("\\n") && test; 
  }

  // 커스텀 구분자 추출
  getCustomDelimiter(str) {
    return str.slice(str.indexOf("//") + 2, str.indexOf("\\n"));
  }


  // 입력값 오류 확인
  checkErrorOfAnswer(str, delimiters) {
    let rst = str.replace(new RegExp(/^\/\/(.*?)\\n/,'g'), "");
    rst = rst.replaceAll(new RegExp(`[0-9]|${delimiters}`, 'g'), "");
    
    return rst === "" ? false : true;
  }

  // 숫자들 가져오기
  getNumbers(str, isCustom, delimiters) {
    let rst = "";
    if(isCustom) {
      rst = str.replace(new RegExp(/^\/\/(.*?)\\n/, 'g'), ""); 
    }

    rst = rst ? rst : str;

    return  rst.split(new RegExp(`${delimiters}`, 'g'));
  }

}



export default App;

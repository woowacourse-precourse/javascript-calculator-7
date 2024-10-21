import { MissionUtils } from "@woowacourse/mission-utils";

class InputHandler {
  regex1 = /^\d+([:,]\d+)*$/;
  delRegex = /^\/\/(.)\\n/;
  
  input;
  num;
  constructor() {
    this.sum = 0;
    this.delimiter = /[,:]/;
  }

  async getInput() {
    try {
      this.input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해주세요.');
      return 1;
    } catch (error) {
      console.error("error");
      // reject 되는 경우
    }
  }

  // 커스텀 구분자 있는 input. 커스텀 구분자 추가 및 input 수정
  getInputDelimiter() {
    console.log(this.input);
    if (this.delRegex.test(this.input)){   
      const inputDel = this.input.match(this.delRegex)[1];
      this.delimiter = new RegExp(`[,:${inputDel}]`);
      this.input = this.input.replace(this.delRegex, '');
    }
    console.log(this.input);
  }

  getNumbers() {
    // 공백
    if (this.input === '') {
      this.num = [];
    }
    // 구분자 input 
    else if (this.regex1.test(this.input)) {
      this.num = this.input.split(this.delimiter).filter(Boolean);
    }
    else {
      console.error("error getNumbers");
    }
    console.log(this.num);
  }


}

export default InputHandler;
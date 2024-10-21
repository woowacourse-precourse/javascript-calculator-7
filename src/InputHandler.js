import { MissionUtils } from "@woowacourse/mission-utils";

class InputHandler {
  regex;
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
    } catch (error) {
      throw new Error("[Error] : 잘못된 문자열을 입력하였습니다.");
      // reject 되는 경우
    }
  }

  // 구분자 get : 커스텀 구분자 추가 및 input 수정
  getInputDelimiter() {
    if (this.delRegex.test(this.input)){   
      const inputDel = this.input.match(this.delRegex)[1];
      this.delimiter = new RegExp(`[,:${inputDel}]`);
      this.input = this.input.replace(this.delRegex, '');
    }
    // 추가된 구분자 정규표현식 생성
    this.regex = new RegExp(`^\\d+(${this.delimiter.source}\\d+)*$`);
    
  }

  getNumbers() {
    // 공백
    if (this.input === '') {
      this.num = [];
    }
    // 구분자 input 
    else if (this.regex.test(this.input)) {
      this.num = this.input.split(this.delimiter).filter(Boolean);
    }
    else {
      throw new Error("[ERROR] : 잘못된 문자열을 입력하였습니다.");
    }
    //console.log('num : ', this.num);
  }
  
  // 합계 계산
  getSum() {
    if (this.num == null ){
      throw new Error("[ERROR] : 잘못된 문자열을 입력하였습니다.");
    }
    else if (this.num.length === 0) {
      this.sum = 0;
    }
    else {
      this.num.forEach((num) => {
        this.sum += Number(num);
      });
    }
    return this.sum;
  }

}

export default InputHandler;
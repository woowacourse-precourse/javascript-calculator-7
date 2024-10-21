import { MissionUtils } from "@woowacourse/mission-utils";

class InputHandler {
  regex1 = /^\d+([:,]\d+)*$/;
  delRegex = /^\/\/(.)\\n/;
  input;
  delimiter;
  constructor() {
    this.sum = 0;
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

  inputDelimiterCheck() {
    console.log(this.input.match(this.delRegex));
    // 공백인 경우
    if (this.input === ''){
      console.log('공백\n');
      // sum = 0
    }
    // 구분자가 있는 input
    else if (this.delRegex.test(this.input)){
      console.log('구분자 O\n');
      // 구분자 추가  
      const inputDel = this.input.match(this.delRegex)[1];
      this.delimiter = new RegExp(`[,:${inputDel}]`);
    }
    //구분자 없는 input
    else if (this.regex1.test(this.input)){
      console.log('구분자 X\n');
      this.delimiter = new RegExp('[,:]');
      // pass
    }
    // 잘못된 input
    else {
      console.log('에러\n');
      // error throw
    }
  }

  getNumbers() {
    // 구분자 사이의 숫자 추출 후 저장
  }

  getSum() {
    // 합계 계산
  }


}

export default InputHandler;
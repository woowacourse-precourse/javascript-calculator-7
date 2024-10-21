import { MissionUtils } from "@woowacourse/mission-utils";

class InputHandler {
  regex1 = /^\d+([:,]\d+)*$/;
  regex2 = /^\/\/(.)\n\d+([:,]\d+)*$/;
  delRegex = /^\/\/(.)\n/;
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

  checkDelimiter() {
    if (this.input.match(this.regex2) !== null){
      // 구분자 추출
      const inputDel = input.match(/^\/\/(.)\n/);
      // 구분자 추가
      this.delimiter = new RegExp(`[,:${inputDel}]`);
    }
    else {
      this.delimiter = new RegExp('[,:]');
    }
  }
  inputTypeCheck() {
    // 공백인 경우
    if (this.input === ''){
      console.log('공백\n');
      // sum = 0
    }
    //구분자 없는 input인 경우
    if (this.input.match(this.regex1) !== null){
      console.log('구분자 X\n');
      this.delimiter = new RegExp('[,:]');
      // pass
    }
    // 구분자가 있는 input
    else if (this.input.match(this.regex2) !== null){
      console.log('구분자 O\n');
      // 구분자 추출
      const inputDel = input.match(this.delRegex);
      // 구분자 추가
      this.delimiter = new RegExp(`[,:${inputDel}]`);
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
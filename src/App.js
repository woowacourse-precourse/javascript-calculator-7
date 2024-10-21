import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    // 커스텀 구분자
    this.customDelim = null;
  }

  getCustomDelim(str) {
    let start = str.indexOf("//");
    let end = str.indexOf("\\n");
    
    // 커스텀 구분자의 시작인 //의 길이 2를 끝문자인 \\n의 시작위치에서 뺐을 때 1보다 크다면 1개의 구분문자가 아닌 길이 1이상의 문자가 입력된 것으로 에러를 throw
    if(end - 2 > 1)
      throw new Error("[ERROR]: 입력 값이 잘못됐습니다.");

    // "//"와 "\n" 사이의 커스텀 구분자 문자를 customDelim 멤버변수에 저장한다.
    this.customDelim = str.charAt(start + 2);
  }

  checkInput(str) {
    let regExp = null;
    let _str = str;

    if(str.indexOf("//") === -1) {
      regExp = new RegExp(`^([0-9]+[,:]*)*[0-9]*$`, 'g');
    } else {
      // 커스텀 구분자가 있다면 커스텀 구분자를 추출한다.
      this.getCustomDelim(str);

      // 커스텀 구분자 추출 후 커스텀 구분자와 관련된 문자열을 제거함
      _str = str.slice(str.indexOf("\\n") + 2);

      // 커스텀 구분자를 인식할 수 있도록 정규식 작성
      regExp = new RegExp(`^([0-9]+[,:${this.customDelim}]*)*[0-9]*$`, 'g');
    }

    //정규식 테스트를 통해 입력 값이 잘못된지 체크 후 잘못 됐다면 에러를 throw
    if(!regExp.test(_str)) {
      throw new Error("[ERROR]: 입력 값이 잘못됐습니다.");
    }
  }

  splitDelim(str) {
    // /,|:/ 정규식을 통해 split메서드로 여러개의 구분자를 사용하여 문자열을 가공한다
    let processedStr = null;
    
    if(str.indexOf("//") === -1) {
      // 커스텀 구분자의 시작인 "//"가 존재하지 않으면 ",",":"를 사용한 추출을 진행한다.
      processedStr = str.split((/,|:/));
    } else {
      // 커스텀 구분자의 끝인 "\n"의 위치까지 slice한 후 커스텀 구분자를 기본 구분자인 쉼표(,)로 치환한 후 숫자를 추출한다.
      processedStr = str.slice(str.indexOf("\\n") + 2).replaceAll(this.customDelim, ",").split((/,|:/));
    }

    // + 단항연산자를 이용해서 문자열 -> 숫자 변환을 한다
    for(let i = 0; i<processedStr.length; ++i) {
      processedStr[i] = +processedStr[i];
    }

    return processedStr;
  }

  addAll(arr) {
    let sum = 0;

    // arr을 순회하며 모든 원소 값을 더한다.
    for(let num of arr) {
      sum += num;
    }

    return sum;
  }

  async run() {
    try {
      const inputStr = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');

      //입력 값이 올바른지 체크
      this.checkInput(inputStr);

      let result = 0;

      //입력 값이 올바르다면 숫자 추출 후 덧셈 진행
      result = this.addAll(this.splitDelim(inputStr));

      //덧셈 결과 출력
      Console.print('결과 : ' + result);
    } catch (err) {
      Console.print(err.message);
    }
  }
}

export default App;

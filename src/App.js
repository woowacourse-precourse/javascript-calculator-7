import {Console} from "@woowacourse/mission-utils";


class App {
  async run() {

    try{
      // 입력
      const input = await this.getInput();
      Console.print(input);

      // 커스텀 구분자 파싱

      // 숫자 파싱

      // 합계 연산

      // 결과 출력


    }catch(error){

    }
  }

  async getInput(){
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    return input;
  }
}

export default App;

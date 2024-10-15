import {Console} from "@woowacourse/mission-utils";
class App {
  async run(
  ) {
    const result = 0 ;
    let input="";
    Console.print("덧셈할 문자열을 입력해 주세요.");
    input=await Console.readLineAsync(input)
    Console.print("결과 : "+result);
  }
}

export default App;

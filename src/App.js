import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = [',',':',];
    let number = [];
    let sum = 0;

    Console.print('덧셈할 문자열을 입력해 주세요.');
    const data = await Console.readLineAsync('');


    Console.print(`결과 : ${sum}`);
    function getCustomSeparator(data) {
      if(data.startsWith('//')){ 
        if(data.include('\n')){
          if(data.substring(3, 5) == "\n"){
            separator.push(data[2]); 
          } 
          else{
            Console.print('[ERROR] 잘못된 커스텀 구분자입니다. 커스텀 구분자는 한 개의 문자만 설정 가능합니다.');
          }
        }
        else{
          Console.print('[ERROR] 잘못된 문자열입니다. 문자열에는 구분자, 숫자만 입력 가능합니다.');
        }
      }
    }
  }
}

export default App;

import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.')
    const input = await Console.readLineAsync('');

    if (input === ""){
      Console.print('0')
    }

    let separation =  /[,|:]/;
    let numbers = [];
    const CUSTOM_START_INDEX = input.startsWith('//')
    const CUSTOM_END_INDEX = input.indexOf('\\n')

    if (CUSTOM_START_INDEX) {
      if (CUSTOM_END_INDEX !== -1){ 
          const customSepartion = input.substring(2, CUSTOM_END_INDEX)
          separation = new RegExp(`[${customSepartion},|:]`);
          numbers = input.substring(CUSTOM_END_INDEX+2).split(separation)
          }
          else{
            throw new Error("[ERROR]잘못된 입력입니다.");
          }
    }else{
        numbers = input.split(separation)
      }

    if(numbers.length > 0 && numbers.find((num)=>isNaN(num) || num <=0)){
      throw new Error("[ERROR]잘못된 입력입니다.");
    } 

  }
}

export default App;

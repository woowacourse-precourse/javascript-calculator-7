import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.')
    const INPUT = await Console.readLineAsync('');

    if (INPUT === ""){
      Console.print('0')
    }

    let separation =  /[,|:]/;
    let numbers = [];
    const CUSTOM_START_INDEX = INPUT.startsWith('//')
    const CUSTOM_END_INDEX = INPUT.indexOf('\\n')

    if (CUSTOM_START_INDEX) {
      if (CUSTOM_END_INDEX !== -1){ 
          const CUSTOM_SEPERATION = INPUT.substring(2, CUSTOM_END_INDEX)
          separation = new RegExp(`[${CUSTOM_SEPERATION},|:]`);
          numbers = INPUT.substring(CUSTOM_END_INDEX+2).split(separation)
          }
          else{
            throw new Error("[ERROR]잘못된 입력입니다.");
          }
    }else{
        numbers = INPUT.split(separation)
      }

    if(numbers.length > 0 && numbers.find((num)=>isNaN(num) || num <=0)){
      throw new Error("[ERROR]잘못된 입력입니다.");
    } 

    const result = numbers.map(Number).reduce((sum, num) => sum + num, 0);
    Console.print(`결과 : ${result}`)
  }
}

export default App;

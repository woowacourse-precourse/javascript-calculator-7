import { Console } from '@woowacourse/mission-utils'; 

class App {
  async run() {
    try {

      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요."); 

      const result = this.calculator(input); 
      Console.print(`결과 : ${result}`); 
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`); 
    }
  }

  
  calculator(input){
    if(input.length===0){
      return 0;
    }
  }


}


export default App;

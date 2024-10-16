import { Console } from '@woowacourse/mission-utils'; 

class App {
  async run() {
    try {

      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n"); 
      const result = this.calculatorSum(input); 
      Console.print(`결과 : ${result}`); 
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`); 
    }
  }

  
  calculatorSum(input){

    if(input.length===0){
      return 0;
    }

    let delimiter = /[,:]/;
    
    if(input.startsWith('//')){
      const part = input.split('\\n');   
      if (part.length !== 2 || !part[1]) {
        throw new Error("잘못된 입력 형식입니다."); 
      }

      delimiter = new RegExp(part[0].slice(2));
      input = part[1];
    }

    const numbers = input.split(delimiter).map(Number);

    if(numbers.some(n=>n<0)){
      throw new Error("음수입니다.")
    }
    if(numbers.some(isNaN)){
      throw new Error("잘못된 값을 입력하였습니다.")
    }
    for (let i = 0; i < input.length - 1; i++) {
      if (delimiter.test(input[i]) && delimiter.test(input[i + 1])) {
          throw new Error("잘못된 값을 입력하였습니다."); 
      }
    }
    return numbers.reduce((acc, num) => acc + num, 0);

  }
}

export default App;

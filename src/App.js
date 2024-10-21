import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
        Console.print('덧셈할 문자열을 입력해 주세요.');
        const input = await Console.readLineAsync('');
    
        if (input === "") {
          return Console.print("결과 : 0");
        }

        let deli = /[,|:]/;
        let part = input;
    
        if (input.startsWith("//")) {
        
          const parts = input.split("\\n");

          const custom = parts[0].substring(2);
    
          deli = new RegExp(`[${custom},|:]`);
          part = parts[1];
        }
    
        const numbers = part.split(deli).map(Number);
  
        Console.print("결과 : " + numbers.reduce((sum, number) => sum + number, 0));
      }
  }



export default App;

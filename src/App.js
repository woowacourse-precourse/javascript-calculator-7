import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    
    let userInput;
    let result = 0;
    while(true){
      userInput = await Console.readLineAsync('');

      if(!this.isEmpty(userInput)) {
        
      }
      
    }

  }

  isEmpty(userInput) {
    return userInput === '';
  }
}

export default App;

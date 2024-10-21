import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    try{
      Console.print(this.addNumber(input))
    }catch{

    }
  }

  addNumber(input) {
    const possible = [':', ','];
    const num = [];
  
    const inputArray = input.split(possible[0]);
    console.log(inputArray); 
  
    for (let i of inputArray) {
      num.push(...i.split(possible[1]));
    }
  
    console.log(num); 
  
    return num.reduce((a, b) => Number(a) + Number(b), 0);
  }
  
}

export default App;

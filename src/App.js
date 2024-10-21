import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { check_custom_mark } from "/Users/kimttang/javascript-calculator-7/src/check_custom_marks.js"
import { custom_mark } from "./custom_markIs.js";
import { search_num } from "./using_mark_and_search_num.js";
import { Sum_string_num } from "./Sum_stringNum.js";
 
class App {
  async run() {
    // input 받기 끝
    let userInput = '4;5;6';
    let customMk = '';
    let last_indexOfCusMark;
    let Str_num_array = [];
    let sum = 0;

    if(check_custom_mark(userInput) !== false){ // 문자안에 커스텀 마크가 있는 경우
      customMk = custom_mark(userInput, check_custom_mark(userInput));
      Str_num_array = search_num(userInput, check_custom_mark(userInput), customMk);
      sum = Sum_string_num(Str_num_array);
      Console.print(sum);

    }
    else{
      Str_num_array = search_num(userInput);
      sum = Sum_string_num(Str_num_array);
      Console.print(sum);
    }
    
  }
}







export default App;

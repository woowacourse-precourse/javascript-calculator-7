import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {}
}

export default App;



// [1] 사용자 입력값 임시테스트값 지정
const inputValue = "//;\n2 ;4; 5; 7";
// const inputValue = "1 ;2|3 :5, 8";


// [2] 입력값 공백제거
const INPUT_VALUE = inputValue.replace(/[^\S\n]/g, "");
console.log('입력값이 무엇이죠? : ', INPUT_VALUE);


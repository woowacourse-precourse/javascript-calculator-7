import {Console, MissionUtils} from "@woowacourse/mission-utils"

class App {
  constructor(){
    this.DELIMITERS_SET = new Set([',',':'])
  }

  //정규표현식 대체 함수
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  //문자열 입력 함수
  inputStr() {
    const NOTICE = `- 문자열을 입력하고 enter를 눌러봐요\n- 커스텀 구분자를 추가하시고 싶으면, //를 입력 후 원하는 구분자를 입력하세요 \n- 종료를 원하시면 quit를 입력하세요 \n`
    const INPUT_STR = Console.readLineAsync(NOTICE)
    return INPUT_STR
  };

   //입력한 문자에서 커스텀 구분자 판별
  detectDelimeter(str) {
    
    var CHAR_ARRAY = {}
    CHAR_ARRAY = str.split("")
    var DELIMITER_INPUT = CHAR_ARRAY
    if (CHAR_ARRAY.length >= 2 && (CHAR_ARRAY[0] == '/' && CHAR_ARRAY[1] == '/' )){
      DELIMITER_INPUT = CHAR_ARRAY.splice(2)
      DELIMITER_INPUT.forEach(delimeter => {
        this.DELIMITERS_SET.add(delimeter)
      })
      return true
    }
  
    return false
  }

  //입력받은 문자에서 구분자 걸러내고 숫자 배열 리턴하는 함수
  filterInteger(str){
    const CURRENT_DELIMITER = [...this.DELIMITERS_SET].map(delimiter => this.escapeRegExp(delimiter)).join('|')
    const SPLIT_REG = RegExp(CURRENT_DELIMITER)
    const INT_ARRAY = str.split(SPLIT_REG)
    // Console.print([...INT_ARRAY])
    return INT_ARRAY;

  }
  
  //숫자 더하는 함수
  sumInteger(arr){
    var RESULT = 0;
    arr.forEach(element => {
      const CURRENT_INT = Number(element)
      RESULT += CURRENT_INT
    })
    return RESULT;
  }

  async run() {

    while(true){
      try {
        const INPUT_STR = await this.inputStr()
        if (INPUT_STR === 'quit' ){
          Console.print("종료")
          break;
        }
        const DETECT_DELIMITER = this.detectDelimeter(INPUT_STR)
        if (DETECT_DELIMITER == true){
          // Console.print('- 현재 구분자')
          // Console.print([...this.DELIMITERS_SET])
        }
        else{
          const FILTERED_ARRAY = this.filterInteger(INPUT_STR);
          const SUM_RESULT = this.sumInteger(FILTERED_ARRAY)
          if(Number.isNaN(SUM_RESULT)){
            Console.print("error")
            throw new Error('[ERRROR] 구분자 이외의 문자를 입력했습니다.')
          }
          else{
            Console.print(SUM_RESULT)
          }
        }
      } catch (error) {
        Console.print(error)
      }
    }
  }
}

export default App;

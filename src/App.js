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
  inputStr(notice) {
    const INPUT_STR = Console.readLineAsync(notice)
    return INPUT_STR
  };

   //입력한 문자에서 커스텀 구분자 판별
  detectDelimeter(str) {
    try {
      var CHAR_ARRAY = []
      CHAR_ARRAY = String(str).split("")
      var TEMP_INPUT = ""
      var IS_DELIMITER = false
      // '//'로 시작되면 구분자 판별
      if (CHAR_ARRAY.length >= 2 && (CHAR_ARRAY[0] == '/' && CHAR_ARRAY[1] == '/' )){
        IS_DELIMITER = true
        var DELIMITER_INPUT = CHAR_ARRAY.splice(2)
        DELIMITER_INPUT.forEach((delimeter,index )=> {
          if( delimeter !== '\\'){
            if(TEMP_INPUT === '\\' && delimeter === 'n'){
              IS_DELIMITER = false
              CHAR_ARRAY = DELIMITER_INPUT.splice(index+1)
            }
            this.DELIMITERS_SET.add(delimeter)
          }
          else if (delimeter === '\\' ){
            if(TEMP_INPUT === ''){
              TEMP_INPUT = '\\'
            }
            else{
              this.DELIMITERS_SET.add('\\')
            }
          }
        })
      }
      // //*^ 같이 \n으로 끝나지 않을 때 에러 처리
      if (IS_DELIMITER === true){
        return Error("[ERROR] 구분자 입력 양식이 옳지 않습니다.")
      }
      const SUM_RESULT = this.sumInteger(CHAR_ARRAY)
      return SUM_RESULT
      
    } catch (error) {
      return Error("[ERROR] 구분자 입력 양식이 옳지 않습니다.")
    }
    
  }

  //입력받은 문자에서 구분자 걸러내고 숫자 배열 리턴하는 함수
  filterInteger(str){
    try {
      Console.print(str)
      const CURRENT_DELIMITER = [...this.DELIMITERS_SET].map(delimiter => this.escapeRegExp(delimiter)).join('|')
      const SPLIT_REG = RegExp(CURRENT_DELIMITER)
      const INT_ARRAY = str.split(SPLIT_REG)
      return INT_ARRAY;
    } catch (error) {
      return Error('[ERROR] 숫자 배열을 리턴하는 중에 에러가 발생했습니다.')
    }
    
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

    try {
      var NOTICE = "덧셈할 문자열을 입력해 주세요.\n"
      var INPUT_STR = await this.inputStr(NOTICE)
      if (INPUT_STR === 'quit' ){
        Console.print("종료")
      }
      const SUM_RESULT = this.detectDelimeter(INPUT_STR)
      if(Number.isNaN(SUM_RESULT)){
        throw new Error('[ERROR] 구분자 이외의 문자를 입력했습니다.')
      }
      else{
        Console.print(`결과 : ${SUM_RESULT}`)
      }
      
    } catch (error) {
      throw new Error(error)
    }
    
  }
  
}

export default App;

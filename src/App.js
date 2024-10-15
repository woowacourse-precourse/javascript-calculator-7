import {Console} from "@woowacourse/mission-utils";

class App {
  sum = 0
  customSeparator = ""
  async run() { //풀이 결과 반환 담당
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")

    this.isCustom(input)
    this.calculator([...input])
    this.resultOutput()
  }

  isCustom(value){
    const startIdx = value.indexOf("//")+2
    const lastIdx = value.indexOf("\\n")
    this.customSeparator = value.slice(startIdx,lastIdx)
    return value.slice(lastIdx+2)
  }

  isSeparator(value){//구분자 판단
    return value === "," || value === ":" ? 0 : value
  }

  resultOutput(){
    Console.print(`결과 : ${this.sum}`)
  }

  calculator(arr){ //계산 담당
    for (const element of arr) {
      this.sum += Number(this.isSeparator(element))
    }
  }

}

export default App;

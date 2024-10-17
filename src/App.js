import {Console} from "@woowacourse/mission-utils";

class App { //하나의 메소드는 하나의 역할
  sum = 0 
  customSeparator = "" //인스턴스 변수는 최대 2개
  async run() { //풀이 결과 반환 담당, 메소드명만 봐도 무슨역할인지 알 수 있게
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    this.isCustom(input)
    this.calculator([...input])
    this.resultOutput()
  }

  isCustom(value){ //isCustom 을 무조건 거치게 만들자 조건 넣기
    const startIdx = value.indexOf("//")+2 //2
    const lastIdx = value.indexOf("\\n") //3
    if(startIdx-lastIdx < 0){
      this.customSeparator = value.slice(startIdx,lastIdx)
      return value.slice(lastIdx+2)
    }
    return value
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

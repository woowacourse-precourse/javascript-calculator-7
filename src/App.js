import {Console} from "@woowacourse/mission-utils";

class App { //하나의 메소드는 하나의 역할
  sum = 0 
  customSeparator = "" //인스턴스 변수는 최대 2개
  async run() { //풀이 결과 반환 담당, 메소드명만 봐도 무슨역할인지 알 수 있게
    const input = await this.input()
    if(input.slice(0,2) === "//"){
      this.isCustom(input)
    }
    this.calculator([...this.isCustom(input)])
    this.resultOutput()
  }
 //에러처리

  async input(){ //입력 메서드
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
  }
  isCustom(value){ //isCustom 을 무조건 거치게 만들자 조건 넣기
    //const startIdx = value.indexOf("//")+2 //2
    const lastIdx = value.indexOf("\\n") //3
    // "\n" 가 없는 경우
    if(lastIdx !== -1){
      this.customSeparator = value.slice(2,lastIdx)
      return this.calculator([...value.slice(lastIdx+2)])
    }
    throw new Error("[Error]: 에러발생")
  }

  isSeparator(value){//구분자 판단
    return value === "," || value === ":" ||  value === this.customSeparator ? 0 : value
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

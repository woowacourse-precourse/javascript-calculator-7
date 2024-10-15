import {Console} from "@woowacourse/mission-utils";

class App {
  sum = 0
  async run() { //풀이 결과 반환 담당
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    this.calculator([...input])
    Console.print(this.sum)
  }

  isSeparator(value){//구분자 판단
    return value === "," || value === ";" ? 0 : value
  }

  calculator(arr){ //계산 담당
    for (const element of arr) {
      this.sum += Number(this.isSeparator(element))
    }
  }

}

export default App;

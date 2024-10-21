import { Console } from "@woowacourse/mission-utils";

class App {

  getCustomReturns = (string) => {
    const RETURNS = {
      customKey: '',
      stringStart: 0
    }
    let str = string.toString()

    if (str.slice(0, 2) === '//') {
      for (let i = 2; i < str.length; i++) {
        if (str.slice(i, i + 1) === "n") {
          if (str.slice(i - 1, i + 1) === '\\n') {
            RETURNS.customKey = str[2]
            RETURNS.stringStart = i + 1
          }
        }
      }
    } else if (typeof string[0] !== 'number') {
      throw new Error("[ERROR] 커스텀 구분자를 사용하려면 정해진 형식을 따라주세요!")
    }
    return RETURNS
  }

  caculateSum = (string) => {
    let sliceString = '';
    let sum = 0;
    //커스텀 구분자 가져오기
    const RETURNS = this.getCustomReturns(string)
    let str = string.toString()

    if (RETURNS.customKey === '') {
      //기본 구분자 계산
      const KEY1 = ',', KEY2 = ":";
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== KEY1 && str[i] !== KEY2) {
          //두 개의 key모두 해당하지 않으면 sum
          sum += Number(str[i])
        }
      }
    } else {
      //커스텀 구분자 사용 계산
      sliceString = str.slice(RETURNS.stringStart)
      for (let i = 0; i < sliceString.length; i++) {
        if (sliceString[i] === RETURNS.customKey) {
          continue
        } else if (sliceString[i] !== RETURNS.customKey) {
          //customKey에 해당하지 않으면 sum
          sum += Number(sliceString[i])
        }
      }
    }
    return sum;
  }

  async run() {
    //입력
    const Input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.")
    //출력
    const result = "결과 : " + this.caculateSum(Input)
    Console.print(result)
  }
}


export default App;

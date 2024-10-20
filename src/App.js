import { Console } from "@woowacourse/mission-utils";

class App {

  getCustomKey = (string) => {
    let customKey = '';
    if (typeof string === 'string') {

      if (string.toString().slice(0, 2) === '//' && string.toString().slice(3, 4) === '\n') {

        customKey = string[2]
      }
      return customKey
    }
  }

  caculateSum = (string) => {
    let customKey = '';
    let sliceString = '';
    let sum = 0;
    //커스텀 구분자 가져오기
    customKey = this.getCustomKey(string)
    if (customKey === '') {
      //기본 구분자 계산
      const key1 = ',', key2 = ":";
      for (let i = 0; i < string.length; i++) {
        if (string[i] !== key1 && string[i] !== key2) {
          //두 개의 key모두 해당하지 않으면 sum
          sum += +string[i]
        }
      }
    } else {
      //커스텀 구분자 사용 계산
      sliceString = string.toString().slice(4)

      for (let i = 0; i < sliceString.length; i++) {

        if (sliceString[i] === customKey) {

          continue
        } else if (sliceString[i] !== customKey) {
          //customKey에 해당하지 않으면 sum

          sum += +sliceString[i]
        }
      }
    }

    return sum;

  }



  async run() {

    //기본구분자사용
    console.log(this.caculateSum('1,2,3'))
    //커스텀구분자사용
    console.log(this.caculateSum('//;\n1;2;3;4'))

  }
}


export default App;

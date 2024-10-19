import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let inputStr = await this.getString();

    let strArr = [];
    if(inputStr.includes('//') && inputStr.includes('\\n')){
      const customSeparator = this.getCustom(inputStr);
      inputStr = inputStr.split('\\n')[1];
      strArr = this.separateStr(inputStr, customSeparator);
    }
    else{
      strArr = this.separateStr(inputStr);
    }

    this.checkInput(strArr);

    const sum = this.getSum(strArr);
    Console.print("결과 : " + sum);
  }

  async getString(){
    try{
      const inputStr = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
      return inputStr;
    } catch(error){
      Console.print('Error: ' + error.message);
      return null;
    }
  }

  getCustom(str){
    const regex = /\/\/(.*?)\\n/;
    const customSeparator = str.match(regex);

    return customSeparator ? customSeparator[1] : null;
  }

  separateStr(str, customSeperator = null){
    const delimiters = new RegExp(`[,:${customSeperator}]`)

    const strArr = str.split(delimiters);

    return strArr;
  }

  checkInput(strArr){
    for(let i = 0; i < strArr.length; i++){
      const num = Number(strArr[i]);
      if(isNaN(num) || num < 0)
        throw new Error("[ERROR]");
    }
  }

  getSum(strArr){
    const sum = strArr.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

    return sum;
  }
}

export default App;
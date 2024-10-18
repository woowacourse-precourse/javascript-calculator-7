import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let inputStr = await this.getString();

    let strArr = [];
    if(inputStr.includes('//') && inputStr.includes('\\n')){
      const customSeperator = this.getCustom(inputStr);
      inputStr = inputStr.split('\\n')[1];
      strArr = this.separateStr(inputStr, customSeperator);
    }
    else{
      strArr = this.separateStr(inputStr);
    }
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
    const customSeperator = str.match(regex);

    return customSeperator ? customSeperator[1] : null;
  }

  separateStr(str, customSeperator = null){
    const delimiters = new RegExp(`[,:${customSeperator}]`)

    const strArr = str.split(delimiters);
    Console.print(strArr);

    return strArr;
  }
}

export default App;
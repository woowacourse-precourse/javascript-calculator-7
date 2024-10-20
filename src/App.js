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



  async run() {

    console.log(this.getCustomKey("//;\n"))

  }
}


export default App;

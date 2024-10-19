import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    try{

      let input = await Console.readLineAsync("");

      if(input.length === 0){ //구분자 구할필요 없이 그냥 정답이 0임 
        return 0;
      }
      let seperator = this.getSeperator(input);

      Console.print(seperator);
      
    }
    catch(err){
      Console.print(err.message);
      return;
    }

  }

  getSeperator(input){
    if (input.startsWith("//")) {
      const match = input.match(/\/\/(.+)\\n/);  // "//"와 "\n" 사이의 커스텀 구분자 추출
      if (match === null) {
        throw new Error("[ERROR] 잘못된 입력입니다. 커스텀 구분자를 읽을 수 없습니다.");
      }
      return new RegExp(`[${match[1]}]`); // 커스텀 구분자를 정규식으로 변환
    }

    // 커스텀 구분자가 없는 경우, 기본 구분자를 반환
    return /[,:]/;
  }
}

export default App;

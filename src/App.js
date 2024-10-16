import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const WRITE = await Console.readLineAsync(
      "특별한 계산기입니다. 자유롭게 입력해주세요."
    );
    //입력한 문자열에서 쉼표와 콜론을 구분자로 분리(쉼표와 콜론) 후 숫자로 변환하기
    const SPECIAL_CALCULATOR = strTest(WRITE).map(Number).reduce((a,b)=>(a+b));
    //Number.MAX_SAFE_INTERGER가 초과하는 경우, 처리 테스트케이스
    //Number.MIN_SAFE_INTERGER의 미만인 경우, 처리 
    Console.print(SPECIAL_CALCULATOR);
  } catch (error) {
    //reject 되는 경우
  }
}

//SPECIAL_CALCULATOR 테스트
export function strTest(t) {
  return t.split(/,|:/);
}

console.log(strTest);

export default App;
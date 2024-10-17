import { Console } from "@woowacourse/mission-utils";
//프로그래밍 요구 사항 - 라이브러리 Console API 사용할 것

function isNumeric(data) {
  return !isNaN(Number(data));
}

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요 : ");
    //비동기처리 입력을 위해 await을 사용.

    const inputs = [...input];
    let total = 0;
    let beforeNumber = "";

    try {
      inputs.map((c, index) => {
        if (isNumeric(c)) {
          beforeNumber += c;
        }else if (c === ',' || c === ':') {
          const op = Number.parseInt(beforeNumber);
          total += op;
          beforeNumber = "";
        }else {
          throw `${c}는 조건에 맞지 않는 입력입니다`;
          //잘못된 입력의 경우 에러 메시지와 함께 애플리케이션 종료시키기
        }

        if (index === input.length - 1) {
          if(isNumeric(c)) {
            const op = Number.parseInt(beforeNumber);
            total += op;
          }
          Console.print(`결과 : ${total}`);
        }

      });
    }catch (error){
      Console.print(`[ERROR] : ${error}`);
    }

  }
}

export default App;

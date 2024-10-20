import { Console } from "@woowacourse/mission-utils";
//프로그래밍 요구 사항 - 라이브러리 Console API 사용할 것

function isNumeric(data) {
  return !isNaN(Number(data));
}

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요 : ");
    //비동기처리 입력을 위해 await을 사용.

    let inputs = "";
    let custom = ',';
    const regexp = /^\/\/.\\n/;

    if(regexp.test(input)){
      custom = input.at(2);
      inputs = [...input.split(regexp).at(1)];
      //Console.print(typeof input.split(regexp));
      //Console.print(`정규식 성공 : ${inputs}, ${custom}`);
    }
    else{
      inputs = [...input];
      //Console.print(`정규식 실패 : ${inputs}`);
    }


    let total = 0;
    let beforeNumber = "";

    try {
      //Console.print(`처리할 입력 문자열 : ${inputs}`);

      if(inputs.length === 0){//빈 입력 예외 처리
        //Console.print(`length === 0 : ${inputs}`);
        inputs = [0];
      }

      inputs.map((c, index) => {
        //Console.print(`판단 중인 c1 : ${c}`)
        if (isNumeric(c) && c !== " ") {
          //Console.print(`판단 중인 c2 : ${c}`)
          //Console.print(`판단 중인 c2 ${c}의 type: ${typeof c}`)
          beforeNumber += c;
        }else if (c === ',' || c === ':' || c === custom) {//custom 구분자 추가, 구분자 연속 경우 처리
          //Console.print(`판단 중인 c3 : ${c}`)

          // if(isNumeric(beforeNumber)){
          //   Console.print(`너머릭한 befo : ${beforeNumber}`)
          //   const op = Number.parseInt(beforeNumber);
          //   total += op;
          // }
          const op = Number.parseInt(beforeNumber);
          total += op;

          beforeNumber = "0";

        }else {
          throw `${c}는 조건에 맞지 않는 입력입니다`;
          //잘못된 입력의 경우 에러 메시지와 함께 애플리케이션 종료시키기
        }

        if (index === inputs.length - 1) {
          if(isNumeric(c)) {
            const op = Number.parseInt(beforeNumber);
            total += op;
          }
          Console.print(`결과 : ${total}`);
        }

      });
    }catch (error){
      Console.print(`[ERROR] : ${error}`);
      // return new Promise((resolve, reject) => {
      //   reject(`[ERROR] : ${error}`);
      //   //reject(new Error(`[ERROR] : ${error}`));
      // });
      //throw `[ERROR] : ${error}`;

    }

  }
}

export default App;

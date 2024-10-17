import { Console } from "@woowacourse/mission-utils"

class App {
    async run() {
        Console.print('덧셈할 문자열을 입력해주세요.');
        const DATA = await Console.readLineAsync("");

        let NUMBERS=[];
        const SEPARATOR = ",:";
        let RESULT = 0;

        // 조건 1: 기본 구분자
        if(DATA.match(SEPARATOR)){
          NUMBERS = DATA.split(SEPARATOR).map(Number);
        // 조건 2 : 커스텀 구분자
        }else if (DATA.startsWith("//") && DATA.substring(3, 5) === "\\n"){
          NUMBERS = DATA.substring(5).split(DATA[2]).map(Number);
        // 예외 처리 1 : 빈 문자열 입력
        } else if (DATA === ""){
          Console.print("0")
          return;
        // 예외 처리 2 : 잘못된 문자열 입력 ( 구분자 X, 빈 문자열 X )
        } else {
          NUMBERS=[Number(DATA)];
        }

        // 예외 처리 2 : 틀린 문자열을 입력할 시
        if (NUMBERS.length>0 && NUMBERS.some((NUM) => isNaN(NUM) || NUM <= 0)) {
            throw new Error("[ERROR]");
        }

        // 덧셈 수행
        for (const NUM of NUMBERS) {
            RESULT += NUM;
        }

        Console.print(`결과 : ${RESULT}`);
    }
}

export default App;
import { Console } from "@woowacourse/mission-utils";

class App{
  async run(){
    // 1. 문자열 입력 후 입력 데이터 저장 & 구분자와 사용할 변수 선언
    Console.print('덧셈할 문자열을 입력해 주세요.')
    const DATA=await Console.readLineAsync('');

    let SEPARATOR=/[,|:]/;
    let NUMBERS=[]
    let RESULT = 0;

    // 2. 구분자 분리 1 : 쉼표(,)와 클론(:) 파악 조건문
    if (DATA.match(SEPARATOR)){
      NUMBERS=DATA.split(SEPARATOR).map(Number)
    // 3. 구분자 분리 2. : 커스텀 구분자(//구분자\n) 파악 조건문
    } else if (DATA.startsWith("//")&&DATA.includes("\\n")){
      const custom_index_end=DATA.indexOf("\\n")
      const custom_separator=DATA.substring(2,custom_index_end)

      SEPARATOR=new RegExp(`[${custom_separator},|:]`);
      NUMBERS=DATA.substring(custom_index_end+2).split(SEPARATOR).map(Number);
    // 4. 예외 처리 1 : 빈 문자열 입력시 출력값
    } else if (DATA===""){
      Console.print("0");
      return ;
    // 5. 예외 처리 2 : 숫자로만 구성된 문자열 입력시 처리
    } else {
      NUMBERS=[Number(DATA)]
    }

    // 6. 예외 처리 3( ERROR 발생 ) : 잘못된 숫자나 음수 예외 처리
    if (NUMBERS.some((NUM) => isNaN(NUM) || NUM < 0)) {
      throw new Error("[ERROR]");
    }

    // 7. 분리하여 얻은 숫자의 합 구하기
    for (const NUM of NUMBERS) {
      RESULT += NUM;
    }

    // 8. 결과 출력
    Console.print(`결과 : ${RESULT}`);
  }
}
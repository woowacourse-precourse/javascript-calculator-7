import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {}
}

export default App;

// [1] 사용자 입력값 임시테스트값 지정
const inputValue = "//;\n2 ;4; 5; 7";
// const inputValue = "1 ;2|3 :5, 8";

// [2] 입력값 공백제거
const INPUT_VALUE = inputValue.replace(/[^\S\n]/g, "");
console.log("입력값이 무엇이죠? : ", INPUT_VALUE);

// [3] 커스텀구분자 여부를 확인합니다.
const CUSTOM_PATTERN = /^\/\//;
const IS_THIS_CUSTOM = CUSTOM_PATTERN.test(INPUT_VALUE); // true, flase 여부 반환
console.log("커스텀 구분자인가요? : ", IS_THIS_CUSTOM);

// [4] 커스텀구분자를 처리하는 함수를 만듭니다.
const EXTRACT_CUSTOM_DELI = (INPUT_VALUE) => {
  const WHAT_CUSTOM_DELI = INPUT_VALUE.match(/^\/\/(.+)\n/);
  const CUSTOM_DELIMITER = WHAT_CUSTOM_DELI[1];
  const EXTRACT_NUMBERS = INPUT_VALUE.split("\n")[1];
  const CUSTOM_DELI_COMP = EXTRACT_NUMBERS.split(CUSTOM_DELIMITER);
  const CUSTOM_DELI_NUM_ARR = CUSTOM_DELI_COMP.map(Number);
  return CUSTOM_DELI_NUM_ARR;
};

// [5] 일반구분자를 처리하는 함수를 만듭니다.
const EXTRACT_GEN_DELI = (INPUT_VALUE) => {
  const GEN_DELI_COMP = INPUT_VALUE.split(/[,|;: ]+/);
  const GEN_DELI_NUM_ARR = GEN_DELI_COMP.map(Number);
  return GEN_DELI_NUM_ARR;
};

//  [6] 실직적인 계산을 하는 함수를 만듭니다.
const SUM = (numbersArray) => {
  return numbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
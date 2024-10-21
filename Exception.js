import readline from "readline"; // ES 모듈 방식으로 readline 불러오기

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 프로그램 실행 함수
async function run() {
  isStart();
}

// 입력받은 문자열을 처리하는 함수
function isStart() {
  rl.question("덧셈할 문자열을 입력해 주세요: ", (input) => {
    let custom = getCustom(input);
    let numbers = getNumbers(input, custom);
    if (ExceptionArray(numbers)) {
      let sum = getSum(numbers);
      console.log(`결과 : ${sum}`);
    }
    rl.close(); // 입력 종료
  });
}

// 커스텀 구분자를 추출하는 함수
function getCustom(message) {
  if (message.includes("//") && message.includes("\n")) {
    let FirstIndex = message.indexOf("//");
    let SecondIndex = message.indexOf("\n");
    let custom = message.slice(FirstIndex + 2, SecondIndex);
    if (custom.length === 0) {
      throw new Error("[Error] 커스텀 문자가 한개만");
    }
    console.log(custom);
    return custom;
  }
  return /,|:/; // 기본 구분자
}

// 숫자 추출 및 구분 함수
function getNumbers(input, custom) {
  let sliceMessage = input.includes("\n") ? input.split("\n")[1] : input;
  return sliceMessage.split(custom);
}

// 배열의 숫자 합을 구하는 함수
function getSum(array) {
  let sum = array.reduce((a, b) => Number(a) + Number(b), 0);
  return sum;
}

// 배열 내 요소가 유효한 숫자인지 검사하는 함수
function ExceptionArray(array) {
  for (let i = 0; i < array.length; i++) {
    const num = Number(array[i]);
    if (!Number.isInteger(num)) {
      throw new Error("[Error] 제대로된 커스텀 문자를 입력하세요");
    }
    if (num < 0) {
      throw new Error("[Error] 음수는 입력할 수 없습니다");
    }
  }
  return true;
}

// 프로그램 실행
run();

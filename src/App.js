import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 실행 후 에러 발생시 아래 catch문 발동
    try {
      const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = readInput(input);
      MissionUtils.Console.print("결과 : " + result);
    } catch (error) {
      // 아래 throw 된 에러 메세지를 여기에 표출
      throw new Error("[ERROR]" + error.message);
    }
  }
}

// get input and get sum of it
function readInput(input) {
  // 디폴트 regex 형태 생성
  let regex = /[,:]/

  // 만일 인풋된 형태가 "//?\n"로 시작하는지 확인 후 정교표현식 추가
  if (input.length > 5) {
    if (input.charCodeAt(0) == 47 && input.charCodeAt(1) == 47 && input.charCodeAt(3) == 92 && input.charCodeAt(4) == 110) {
      regex = myRegex(input[2])
      return mySum(input.slice(5), regex)
      }
    }
  return mySum(input, regex)
}

// 정규표현식을 추가하는 함수
function myRegex(new_seperator) {
  const BASE1 = "[,:"
  const BASE2 = "]"
  // [,:?] 형태로 생성후 javaScript regex형태로 리턴
  const RE = BASE1 + new_seperator + BASE2
  return RegExp(RE)
}

// 문자열을 나누고 합을 리턴
function mySum(inputs, regex) {
  // 문자열을 정규표현식 기준으로 나누고 array형태로 저장(String 형태)
  const nums = inputs.split(regex)
  let sum = 0
  for (let i = 0;i < nums.length;i++){
    // Number함수를 통해 int와 같은 숫자 형태로 형변환 후 음수 처리
    if (Number(nums[i])<0) {
      // 에러 객체의 message에 저장
      throw new Error("음수입니다.")
    }
    // 숫자가 아닌 입력 처리
    if (isNaN(Number(nums[i]))) {
      // 에러 객체의 message에 저장
      throw new Error("유효하지 않은 입력값입니다.");
    }
    sum = sum + Number(nums[i])
  }
  return sum
}

export default App;
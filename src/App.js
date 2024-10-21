import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    let numString = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 빈 문자열인 경우 0을 반환
    if (numString === "") {
      Console.print("결과 : 0");
      return;
    }

    let separator_2 = [',', ':'];

    // 커스텀 구분자의 존재 여부
    if (numString.startsWith("//")) {
      let startIdx = numString.indexOf("//") + 2;
      let endIdx = numString.indexOf("\\n");
      if (endIdx === -1) {
        Console.print("[ERROR] 잘못된 입력입니다.");
        return;
      }
      // 커스텀 구분자를 추가
      let custom_separator = numString.slice(startIdx, endIdx);
      if (custom_separator.length > 0) {
        separator_2.push(custom_separator);
      }
      // 문자열에서 구분자 정보를 제거
      numString = numString.slice(endIdx + 2);  // \n은 두 문자니까 +2
    }

    // 구분자로 문자열 나누기
    let regex = new RegExp(separator_2.map(sep => `${sep}`).join('|'), 'g');
    let separate_str = numString.split(regex);

    // 숫자 계산 처리
    let calc = 0;
    for (let i = 0; i < separate_str.length; i++) {
      let currentNum = separate_str[i].trim();  // 공백 제거
      if (currentNum === "") continue;  // 빈 문자열 무시

      // 숫자로 변환 가능한지 확인
      let num = Number(currentNum);
      if (isNaN(num)) {
        Console.print("[ERROR] 잘못된 입력입니다.");
        return;
      }
      calc += num;
    }

    // 결과 출력
    Console.print("결과 : " + calc);
  }
}

export default App;

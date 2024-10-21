import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // readLineAsync() 이용해서 문자열 입력 받기 (앞뒤 공백 제거)
      const input = (
        await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
      ).trim();

      // 구분자 저장하는 배열 만들기
      const separators = [".", ":"];

      // 커스텀 구분자 매칭
      const customSeparatorMatch = input.match(/^\/\/(.)\\n/);

      let cleanedInput = input;

      // 만약 커스텀 구분자가 존재하면 구분자 배열에 추가
      if (customSeparatorMatch) {
        separators.push(customSeparatorMatch[1]);

        // 커스텀 구분자 부분 제거
        cleanedInput = input.replace(/^\/\/(.)\\n/, "").trim();
      }

      // 입력된 문자가 없으면 0 출력 후 종료
      if (!cleanedInput) {
        Console.print("결과 : 0");
        return;
      }

      // 모든 구분자들을 ','로 변환
      const separatorRegex = new RegExp(
        `[${separators
          .map((sep) => sep.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")) // 특수 문자 이스케이프 처리
          .join("")}]`,
        "g"
      );
      const separatedInput = cleanedInput.replace(separatorRegex, ",");

      // ,기준으로 나누고 숫자 배열 생성
      const splitValues = separatedInput.split(",").map((num) => num.trim());

      // 구분자 사이에 숫자가 없는 경우 에러 발생
      if (splitValues.some((value) => value === "")) {
        throw new Error("[ERROR] 구분자 사이에 숫자가 없습니다");
      }

      // 숫자 이외의 값 검증
      splitValues.forEach((value) => {
        if (!/^\d+$/.test(value)) {
          throw new Error("[ERROR] 잘못된 값이 입력되었습니다");
        }
      });

      // 숫자로 변환 후 배열 생성
      const numbers = splitValues.map(Number);

      // 숫자가 없으면 0 출력 후 종료
      if (numbers.length === 0) {
        Console.print("결과 : 0");
        return;
      }

      // 음수나 0이 포함된 경우 에러 발생
      if (numbers.some((num) => num <= 0)) {
        throw new Error("[ERROR] 입력값은 양수로만 구성되어야 합니다");
      }

      // 숫자 배열의 합계를 계산
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      // 에러 발생 시 메시지 출력
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;

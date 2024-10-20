// 문자열을 나누는 StrSumFunc 함수를 따로 만들었다. 왜냐하면 관심사를 분리해 가독성과 부담을 줄이기 위해서이다.

export function StrSumFunc(input) {
  let divisionStr = /[,:]/; // ,:을 나타내는 정규식
  let inputValueStr = input;

  // 커스텀 구분자 추출
  if (inputValueStr.startsWith("//")) {
    const CUSTOMDIVISIONVALUE = inputValueStr.split("\\n");
    if (CUSTOMDIVISIONVALUE.length < 2) {
      throw new Error("[ERROR] 커스텀할 문자와 숫자를 입력해야 합니다.");
    }
    divisionStr = new RegExp(`[${CUSTOMDIVISIONVALUE[0][2]}]`);
    inputValueStr = CUSTOMDIVISIONVALUE[1];
  }

  // 원래는 ,: 구분자 추출하지만 커스텀 구분자일 경우 커스텀 구분자를 추출한다.
  const DIVISIONVALUES = inputValueStr.split(divisionStr);

  // 사용자가 입력한 값이 ""일 때는 0을 반환
  if (DIVISIONVALUES.every((value) => value.trim() === "")) {
    return 0;
  }

  // 구분자들로 구분한 숫자들을 모두 더하는 로직
  let sum = 0;
  // for of 반복문은 빈 값이 들어왔을 때 오류를 반환하다. 하지만 여기서는 위에 따로 빈 값이 들어왔을 때를 대응했으므로 연산이 빠른 for of 반복문을 사용한다.
  for (const DIVISIONVALUE of DIVISIONVALUES) {
    if (DIVISIONVALUE.trim() == "") {
      throw new Error("[ERROR] 구분자만 있고 숫자는 없습니다.");
    }

    if (isNaN(DIVISIONVALUE)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
    }

    if (parseInt(DIVISIONVALUE, 10) < 0) {
      throw new Error("[ERROR] 음수 값이 포함되어 있습니다.");
    }

    sum += parseInt(DIVISIONVALUE, 10);
  }

  return sum;
}

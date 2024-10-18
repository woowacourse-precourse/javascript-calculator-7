// 문자열을 나누는 StrSumFunc 함수를 따로 만들었다. 왜냐하면 관심사를 분리해 가독성과 부담을 줄이기 위해서이다.

export function StrSumFunc(input) {
  let divisionStr = "/[,:]/";
  let inputValueStr = input;

  if (inputValueStr.startsWith("//")) {
    const CUSTOMDIVISIONVALUE = inputValueStr.split("\n");
    if (CUSTOMDIVISIONVALUE.length < 2) {
      throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
    }
    divisionStr = new RegExp(`[${CUSTOMDIVISIONVALUE[0][2]}]`);
    inputValueStr = CUSTOMDIVISIONVALUE[1];
  }

  return;
}

export default function preprocess(input) {
  const isCustom = /^\/\/.*\\n/msu;
  // 커스텀 구분자를 분리해내기 위한 정규표현식
  const hasCustom = /^\/\/.*\\n.*/msu;
  // 커스텀 구분자를 포함하는 문자열인지 확인하는 정규표현식

  if (hasCustom.test(input)) {
    let custom = isCustom.exec(input)[0];

    if (custom.length == 4)
      throw new Error("[ERROR] 커스텀 구분자를 입력해주세요.");
    else if (custom.length > 5)
      throw new Error("[ERROR] 커스텀 구분자는 문자 하나만 사용할 수 있어요.");
    else custom = custom.substring(2, 3);

    let string = input.replace(isCustom, "");

    return [string, custom];
  } else {
    let string = input;

    return [string, ""];
  }
}

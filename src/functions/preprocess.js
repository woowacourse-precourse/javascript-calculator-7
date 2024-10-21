export default function preprocess(input) {
  const IS_CUSTOM = /^\/\/.*\\n/msu;
  // 커스텀 구분자를 확인하기 위한 정규표현식

  const CUSTOM = IS_CUSTOM.exec(input);
  let string = input;
  let custom_seperator = "";

  if (CUSTOM) {
    let custom_seperator = CUSTOM[0];

    if (custom_seperator.length == 4)
      throw new Error("[ERROR] 커스텀 구분자를 입력해주세요.");
    else if (custom_seperator.length > 5)
      throw new Error("[ERROR] 커스텀 구분자는 문자 하나만 사용할 수 있어요.");
    else custom_seperator = custom_seperator.substring(2, 3);

    string = input.replace(IS_CUSTOM, "");
  }
  return [string, custom_seperator];
}

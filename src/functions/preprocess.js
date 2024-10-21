import slice from "./slice.js";

export default function preprocess(input) {
  const isCustom = /^\/\/.*\\n/msu;
  // 커스텀 구분자를 분리해내기 위한 정규표현식
  const inCustom = /^\/\/.*\\n.*/msu;
  // 커스텀 구분자를 포함하는 문자열인지 확인하는 정규표현식

  if (inCustom.test(input)) {
    let custom = isCustom.exec(input)[0];

    if (custom.length == 4) throw "[ERROR] 커스텀 구분자를 입력해주세요.";
    else if (custom.length > 5)
      throw new Error("[ERROR] 커스텀 구분자는 문자 하나만 사용할 수 있어요.");
    else custom = custom.substring(2, 3);

    let string = input.replace(isCustom, "");
    return preprocess_custom(string, custom);
  } else return preprocess_nocustom(input);
}

function preprocess_custom(input, custom) {
  // 커스텀을 제외한 문자열을 반환함.
  return slice(input, custom);
}

function preprocess_nocustom(input) {
  return slice(input, "");
}

function validateInput(targetNumber) {
  // 1. 공백이 있을 때
  if (targetNumber.includes(" ")) return false;

  // 2. //와 \n 사이에 아무것도 없거나 숫자가 들어온 경우
  const CUSTOMWORD = targetNumber.match(/^\/\/(.*?)\n/);
  if (CUSTOMWORD && (CUSTOMWORD[1] === "" || /^\d+$/.test(CUSTOMWORD[1])))
    return false;

  // 5. 아무것도 안 들어온 경우
  if (!targetNumber) return false;

  // 6. 끝에 문자가 있을 경우
  if (!/\d$/.test(targetNumber)) return false;

  // 7. 커스텀 구분자가 없고 음수가 들어온 경우
  if (!CUSTOMWORD && /-\d+/.test(targetNumber)) return false;
  return true;
}

export default validateInput;

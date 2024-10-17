export const checkValid = (message) => {
  if (message.length === 0) throw new Error("[ERROR] 빈 문자열 입력");
  if (message.slice(0, 2) !== "//" || message.slice(3, 5) !== "\\n")
    throw new Error("[ERROR] 잘못된 구분자 입력");
};

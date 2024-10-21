const validNumber = (str) => {
  const number = Number(str)
  if (isNaN(number) || number < 0) {
    throw new Error("[ERROR] 잘못된 입력입니다.")
  }
  return number
}

export default validNumber

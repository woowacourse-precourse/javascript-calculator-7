class Validator {
  validateNumbers(numbers) {
    numbers.forEach((number) => {
      if(typeof number !== "number" || isNaN(number) || number === undefined) {
        throw new Error("유효하지 않을 값이 입력되었습니다.")
      }
    })
  };

  negativeNumbers(numbers) {
    numbers.forEach((number) => {
      if(number < 0){
        throw new Error("음수는 입력할 수 없습니다.")
      }
    })
  }
}

export default Validator;
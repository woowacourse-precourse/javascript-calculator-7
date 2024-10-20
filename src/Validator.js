class Validator {
  validateNumberExist(value) {
    if (value === "") {
      throw new Error("[ERROR] 숫자가 입력되지 않았습니다.");
    }
  }
  validateNumbers(numbers) {
    numbers.forEach((number) => {
      if(typeof number !== "number" || isNaN(number)) {
        throw new Error("[ERROR] 유효하지 않은 값이 입력되었습니다.")
      }
    })
  };

  validateNegativeNumbers(numbers) {
    numbers.forEach((number) => {
      if(number < 0){
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.")
      }
    })
  }

  validateInputFormat(input) {
    if (input.includes("//") && !input.startsWith("//")) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다. //는 앞에 다른 문자가 있을 수 없습니다.");
    }
  }

  validateDelimiter(input) {
    if (input.startsWith("//\\\n")) {
      throw new Error("[ERROR] 식별자(/, \\)는 커스텀 구분자로 사용할 수 없습니다.");
    }
  }

  validateCustomDelimiter(delimiter) {
    
    if (delimiter === "/") {
      throw new Error(`[ERROR] 식별자(/, \\)는 커스텀 구분자로 사용할 수 없습니다.`);
    }

    if (delimiter === ".") {
      throw new Error(`[ERROR] 마침표(.)는 커스텀 구분자로 사용할 수 없습니다.`);
    }

    if (delimiter.length !== 1) {
      throw new Error("[ERROR] 커스텀 구분자는 한 개의 공백이 아닌 한 문자만 허용됩니다.");
    }

    if (!isNaN(Number(delimiter))) {
      throw new Error("[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.")
    }
  }
}

export default Validator;
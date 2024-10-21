// import { ERROR_MESSAGE } from "./content.js";

// class CheckCustomDelimiter {
//   constructor(input) {
//     this.input = input;
//     this.delimiter = [",", ":"]; // 기본 구분자는 쉼표
//     this.extractedNumbers = [];
//     console.log(this.input);
//   }

//   setDelimiter(newDelimiter) {
//     this.delimiter = newDelimiter;
//   }

//   delimiterSeparation() {
//     // 첫 두 문자가 커스텀 구분자인 경우 처리
//     if (this.input.startsWith("//")) {
//       const customDelimiter = this.input.substring(2, 3);
//       this.setDelimiter(customDelimiter);
//       this.delimiter.push(customDelimiter);

//       return this.input.indexOf(customDelimiter) + customDelimiter.length; // \n 다음 인덱스 반환
//     } else {
//       return 0; // 커스텀 구분자가 아닌 경우 0 반환
//     }
//   }
//   numberExtract() {
//     const startIndex = this.delimiterSeparation();
//     let currentNumber = "";

//     for (let i = startIndex; i < this.input.length; i++) {
//       const char = this.input[i];
//       if (!isNaN(char)) {
//         //NULL이 아니면(비어있지 않다면) Null None NaN
//         currentNumber += char; //더하기 연산
//       } else if (char === this.delimiter || char === ":" || char === "\n") {
//         if (currentNumber !== "") {
//           this.extractedNumbers.push(parseInt(currentNumber));
//           currentNumber = "";
//         }
//       } else {
//         throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
//       }
//     }

//     // 마지막 숫자 처리
//     if (currentNumber !== "") {
//       this.extractedNumbers.push(parseInt(currentNumber));
//     }
//   }import { ERROR_MESSAGE } from "./content.js";

class CheckCustomDelimiter {
  constructor(input) {
    this.input = input;
    this.delimiter = [",", ":"]; // 기본 구분자
    this.extractedNumbers = [];
    // console.log(this.input);
  }

  setDelimiter(newDelimiter) {
    this.delimiter.push(newDelimiter);
  }

  delimiterSeparation() {
    // 첫 두 문자가 커스텀 구분자인 경우 처리
    if (this.input.startsWith("//")) {
      // \n 이전까지 모든 문자열을 구분자로 설정
      const endOfDelimiterIndex = this.input.indexOf("\n");
      const customDelimiter = this.input.substring(2, endOfDelimiterIndex);
      this.setDelimiter(customDelimiter);

      return endOfDelimiterIndex + 1; // \n 다음 인덱스 반환
    } else {
      return 0; // 커스텀 구분자가 아닌 경우 0 반환
    }
  }

  numberExtract() {
    const startIndex = this.delimiterSeparation();
    let currentNumber = "";

    for (let i = startIndex; i < this.input.length; i++) {
      const char = this.input[i];
      if (!isNaN(char) && char !== " ") {
        currentNumber += char; // 숫자를 문자열로 추가
      } else if (this.delimiter.findIndex((e) => e === char) !== -1) {
        // 구분자 배열에 현재 char가 포함되는지 확인
        if (currentNumber !== "") {
          this.extractedNumbers.push(parseInt(currentNumber));
          currentNumber = "";
        }
      } else {
        throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
      }
    }

    // 마지막 숫자 처리
    if (currentNumber !== "") {
      this.extractedNumbers.push(parseInt(currentNumber));
    }
  }

  isValidInput() {
    if (this.extractedNumber.length === 0) {
      this.extractedNumber.push(0);
    }
  }
  numberSum() {
    // Console.print("this");
    // Console.print(this.extractedNumbers);
    // Console.print(this.input);

    return this.extractedNumbers.reduce((sum, num) => sum + num, 0);
  }
}
export default CheckCustomDelimiter;

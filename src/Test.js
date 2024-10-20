import StringSumCalController from "./controller/StringSumCalController.js";
import CalculateSumModel from "./model/CalculateSumModel.js";
import SplitModel from "./model/SplitModel.js";

//테스트용
class Test {
  constructor() {
    this.SplitModel = new SplitModel();
    this.CalculateSumModel = new CalculateSumModel();
    this.Controller = new StringSumCalController();
  }
  transferDelimiter(inputText) {
    let [operationText, delimiter] = this.Controller.getParts(inputText);
    const splitArray = this.SplitModel.stringSplit(delimiter, operationText);
    const total = this.CalculateSumModel.calculate(splitArray);
    return total;
  }
  async testCalculate(description, input, expected) {
    try {
      const result = await this.transferDelimiter(input);
      if (expected == result) {
        console.log(`테스트 성공
*description : ${description}
*result : ${result}\n\n`);
      } else {
        console.log(`테스트 실패
*description : ${description}
*실패 연산 : ${input}
*예상 결과 : ${expected}
*실제 결과 : ${result}\n\n`);
      }
    } catch (error) {
      console.log(`연산 불가 : ${input}
*description: ${description}
*error message : ${error.message}\n\n`);
    }
  }

  async runTests() {
    await this.testCalculate("':' 기본 구분자 연산", "1:2:3", 6);
    await this.testCalculate("',' 기본 구분자 연산", "4,12,33", 49);
    await this.testCalculate("기본 구분자 동시 사용", "1,2:4", 7);
    await this.testCalculate("정의되지 않은 구분자", "1,2*4", "error");
    await this.testCalculate("입력값이 음수", "-1,2,3", "error");
    await this.testCalculate("커스텀 구분자 사용", "//*\\n13*12*3", 28);
    await this.testCalculate(
      "여러 글자의 커스텀 구분자 사용",
      "//**\\n13**12**3",
      28
    );
  }
}

export default Test;

import { MissionUtils } from '@woowacourse/mission-utils';
let Console = MissionUtils.Console;

class App {
  async run() {
    Console.print(
      this.setOutput(
        this.add(
          this.processInput(
            await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
          )
        )
      )
    );
  }
  #processInputWithCustomSeperator(inputstr) {
    let condCustomSep = /[^\/\\n]+/g; // exec()[0]의 결과가 seperator
    let expList = inputstr.match(condCustomSep);
    if (expList.length !== 2) throw new Error('[ERROR]: 잘못된 포맷입니다.');
    let [sep, target] = expList;
    let intermediate = target
      .split(sep)
      .map((value) => value.split(RegExp(`(\\${expList[0]}|:|,)`, 'g')))
      .reduce((prev, curr) => prev.concat(curr), [])
      .filter((value) => value !== ':' && value !== ',');
    if (intermediate.some((value) => RegExp('[^0-9-]+', 'g').test(value)))
      throw new Error('[ERROR]: 잘못된 연산식이 들어왔습니다.');
    return intermediate.map((value) => parseInt(value));
  }
  processInput(inputstr) {
    let condCustomInput = /\/\/[^0-9]+\\n.+/g;
    let condCustomSep = /[^\/\\n]+/g; // exec()[0]의 결과가 seperator
    let condSepValid = /[^0-9]+/g;
    let condAbnormalFormat = /[^0-9,:-]+/g;
    // 커스텀 구분자가 있는지 확인
    if (inputstr === '') {
      throw new Error('[ERROR]: 빈 문자열을 입력했습니다!');
    } else if (
      condCustomInput.test(inputstr) &&
      condSepValid.test(inputstr.match(condCustomSep)[0]) // Note:이건 구분자가 적절한지(숫자 미포함인지) 확인하는 코드
    ) {
      // 커스텀 구분자가 있을 경우
      return this.#processInputWithCustomSeperator(inputstr); // private 메서드로 분리함
    } else if (!condAbnormalFormat.test(inputstr)) {
      // 커스텀 구분자가 없으며 포맷에 맞는 경우 정해진 값대로 split
      return inputstr
        .split(/(:|,)/g)
        .filter((value) => !isNaN(value))
        .map((value) => parseInt(value));
    } else {
      // 잘못된 입력
      throw new Error('[ERROR]: 잘못된 포맷입니다.');
    }
  }

  add(inputArr) {
    if (inputArr.some((value) => (value <= 0))) {
      // 음수 처리를 add에서 처리하는 것이 맞는지 모르겠지만, 과제에서 제시한 연산에 이런 조건이 달린 것이 특이하다고 판단하여 여기서 필터링
      throw new Error('[ERROR]: 양수가 아닌 수가 섞여 있습니다!');
    }
    return inputArr.reduce((prev, curr) => prev + curr, 0);
  }
  setOutput(value) {
    return `결과 : ${value}`;
  }
}

export default App;

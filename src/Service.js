import Validator from './Validator.js';
import UserInputHandler from './userInputHandler.js';

export default class Service {
  sumUserInput(input, customSeparator) {
    const splitedUserInput = UserInputHandler.getSplitedBySeparator(
      input,
      customSeparator,
    );
    return UserInputHandler.sum(splitedUserInput);
  }

  validateUserInput(input) {
    // 더블슬래시와 숫자로 시작하는지 검증
    Validator.validateStartsWith(input);

    // 커스텀 구분자와 정제된 입력값 추출
    const { customSeparator, processedUserInput } = this.parseUserInput(input);

    // 구분자를 제대로 사용했는지 검증
    Validator.validateUsedSeparator(processedUserInput, customSeparator);
  }

  parseUserInput(input) {
    let customSeparator = null;
    let processedUserInput = null;

    // 더블슬래시로 시작하는 경우만 추출
    if (Validator.checkStartWidthDubbleSlash(input)) {
      // 사용 가능한 커스텀 구분자인지 검증
      Validator.validateCustomSeparator(input);

      // 사용 가능하면 커스텀 구분자 추출하기
      customSeparator = UserInputHandler.getCustomSeparator(input);
      processedUserInput = UserInputHandler.getRemovedCustomSeparator(input);
    }

    return { customSeparator, processedUserInput: processedUserInput || input };
  }
}

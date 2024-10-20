import { ERROR_MESSAGES } from '../constant/message.js';

// 계산기 데이터 및 비즈니스 로직 처리
class Calculater {
  validateString(input) {
    // 입력이 아예 없는 경우
    if (!input) {
      throw new Error(ERROR_MESSAGES.empty);
    }

    // 커스텀 구분자를 사용하는 경우
    if (input.startsWith('//')) {
      const customDelimiter = this.extractCustomDelimiter(input);
      this.validateCustomDelimiter(customDelimiter);
    }

    // 기본 구분자를 사용하는 경우
  }

  extractCustomDelimiter(input) {
    const inputMatch = input.match(/^\/\/(.+)\n/);

    if (!inputMatch) {
      throw new Error(ERROR_MESSAGES.customForamt);
    }

    return inputMatch[1];
  }

  validateCustomDelimiter(customDelimiter) {
    if (customDelimiter.length > 1) {
      throw new Error(ERROR_MESSAGES.length);
    }

    if (customDelimiter === '.') {
      throw new Error(ERROR_MESSAGES.period);
    }
  }
}

export default Calculater;

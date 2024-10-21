/**
 * Error 처리하는 custom class
 */
class FormatValidationError extends Error {
  constructor() {
    super("[ERROR] 포맷 형식이 올바르지 않습니다.")
  }
}

export default FormatValidationError;
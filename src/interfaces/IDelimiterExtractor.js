class IDelimiterExtractor {
  extractDelimiter(inputValue) {
    throw new Error(
      'extractDelimiter() 메서드는 반드시 오버라이딩 되어야 합니다.'
    );
  }

  getDelimiters() {
    throw new Error(
      'getDelimiters() 메서드는 반드시 오버라이딩 되어야 합니다.'
    );
  }
}

export default IDelimiterExtractor;

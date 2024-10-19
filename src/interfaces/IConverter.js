class IConverter {
  convertAndValidate(values) {
    throw new Error(
      'convertAndValidate() 메서드는 반드시 오버라이딩 되어야 합니다.'
    );
  }
}

export default IConverter;

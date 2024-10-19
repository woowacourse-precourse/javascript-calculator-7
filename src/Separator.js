class Separator {
  process(input) {
    const PATTERN = /^\/\/(.*)\\n(.*)$/;
    const MATCH = input.match(PATTERN);

    // 커스텀 구분자 처리
    if (MATCH) {
      const CUSTOM = MATCH[1]; // 커스텀 구분자
      const NUMS = MATCH[2]; // 숫자 부분

      return NUMS.split(CUSTOM);
    }
    // 기본 구분자 처리
    return input.split(/,|:/);
  }
}

export default Separator;

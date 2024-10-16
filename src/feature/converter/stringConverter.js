function defaultSeparator(text) {
  // FIXME: 배열을 사용해서 정규식을 생성할지 literal에 작성된 것을 사용할지 정해야함
  const DEFAULT_SEPARATOR = [',', ':'];
  const SEPARATOR_REGEX = /[,:]/g;

  let convertedText = text.split(SEPARATOR_REGEX);
  return convertedText;
};

function customSeparator(text) {
  // FIXME: 배열을 사용해서 정규식을 생성할지 literal에 작성된 것을 사용할지 정해야함
  const CUSTOM_SEPERATOR = ['//', '\\n'];
  const CUSTOM_REGEX = /\/\/\w+\n/g;
  const IS_NOT_CUSTOM = -1;

  if(text.search(CUSTOM_REGEX) === IS_NOT_CUSTOM) {
    return text;
  } else {
    /**
     * TODO: 유효성 검사가 필요함
     * 이 함수에서 구현을 할지
     * 다른 파일에서 유효성 검사를 하는 기능을 구현할지
     * 구조에 대해서 조금 더 생각해 볼 필요가 있음
     */
  }
}
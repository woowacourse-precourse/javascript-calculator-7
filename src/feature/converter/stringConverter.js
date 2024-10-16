function defaultSeparator(text) {
  // FIXME: 배열을 사용해서 정규식을 생성할지 literal에 작성된 것을 사용할지 정해야함
  const DEFAULT_SEPARATOR = [',', ':'];
  const SEPARATOR_REGEX = /[,:]/g;

  let convertedText = text.split(SEPARATOR_REGEX);
  return convertedText;
};
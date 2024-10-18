function defaultSeparator(text) {
  // FIXME: 배열을 사용해서 정규식을 생성할지 literal에 작성된 것을 사용할지 정해야함
  const DEFAULT_SEPARATOR = [',', ':'];
  const SEPARATOR_REGEX = /[,:]/g;

  let convertedText = text.split(SEPARATOR_REGEX);
  return convertedText;
};

function getCustomSeparator(customText) {
  const CUSTOM_TEXT_LENGTH = customText.length;
  const CUSTOM_TEXT_ACTUAL_RANGE = CUSTOM_TEXT_LENGTH - 2;
  
  let resultSeparator = customText.slice(2, CUSTOM_TEXT_ACTUAL_RANGE);
  return resultSeparator;
}

function customSeparator(text) {
  // FIXME: 배열을 사용해서 정규식을 생성할지 literal에 작성된 것을 사용할지 정해야함
  const CUSTOM_SEPERATOR = ['//', '\\n'];
  const CUSTOM_REGEX = /\/\/\w+\n/g;
  const IS_NOT_CUSTOM = -1;
  
  const RESULT = new Map([
    ['customSeparatorString', null],
    ['text', null]
  ])
  
  if(text.search(CUSTOM_REGEX) === IS_NOT_CUSTOM) {
    RESULT.set('text', text);
    return RESULT;
  } else {
    let customText = text.match(CUSTOM_REGEX);
    let resultCustomSeparator = getCustomSeparator(customText[0]);
    
    let calculateString = text.replace(CUSTOM_REGEX, '');
    
    RESULT.set('customSeparatorString', resultCustomSeparator);
    RESULT.set('text', calculateString);
    
    return RESULT;
  }
}

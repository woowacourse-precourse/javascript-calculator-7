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

function separator(userInput) {
  const DEFAULT_SEPARATOR = [',', ':'];

  let customSeparatorResult = customSeparator(userInput);
  let userCustomSeparator = customSeparatorResult.get('customSeparatorString');
  let userCalculateString = customSeparatorResult.get('text');

  if(userCustomSeparator === null) {
    const SEPARATOR_REGEX = new RegExp(`[${DEFAULT_SEPARATOR.join('')}]`,'g');
    
    let userStringArray = userCalculateString.split(SEPARATOR_REGEX);
    
    return userStringArray; 
  } else {
    let separators = DEFAULT_SEPARATOR.push(userCustomSeparator);

    const SEPARATOR_REGEX = new RegExp(`[${separators.join('')}]`, 'g');

    let userStringArray = userCalculateString.split(SEPARATOR_REGEX);

    return userStringArray;
  };
};

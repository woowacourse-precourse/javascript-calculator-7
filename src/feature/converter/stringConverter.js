function getCustomSeparator(customText) {
  const CUSTOM_TEXT_LENGTH = customText.length;
  const CUSTOM_TEXT_ACTUAL_RANGE = CUSTOM_TEXT_LENGTH - 2;
  
  let resultSeparator = customText.slice(2, CUSTOM_TEXT_ACTUAL_RANGE);
  return resultSeparator;
}

function customSeparator(text) {
  const CUSTOM_REGEX = /\/\/(.*)\\n/g
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
  const SEPARATORS = [',', ':'];

  let customSeparatorResult = customSeparator(userInput);

  let userCustomSeparator = customSeparatorResult.get('customSeparatorString');
  let userCalculateString = customSeparatorResult.get('text');

  if(userCustomSeparator === null) {
    const SEPARATOR_REGEX = new RegExp(`[${SEPARATORS.join('')}]`,'g');
    
    let userStringArray = userCalculateString.split(SEPARATOR_REGEX);

    userStringArray.map((userInput) => {
      let checkValue = Number(userInput);
      if(Number.isNaN(checkValue)) {
        let errorMessage = '기본 구분자 이외의 커스텀 구분자가 존재합니다. 입력 형식에 맞게 커스텀 구분자를 입력해주세요.';
        const ERROR = new Error(errorMessage);
        throw ERROR;
      }
    })
    
    return userStringArray; 
  } else {
    SEPARATORS.push(userCustomSeparator);

    const SEPARATOR_REGEX = new RegExp(`[${SEPARATORS.join('')}]`, 'g');

    let userStringArray = userCalculateString.split(SEPARATOR_REGEX);

    return userStringArray;
  };
};

export default separator;
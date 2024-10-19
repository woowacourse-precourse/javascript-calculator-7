function getCustomSeparator(data, separator) {

    // \n이 커스텀 구분자 설정이 아닌 용도로 사용된 경우
    if (!data.startsWith('//')) {
      throw new Error(`[ERROR] 숫자 및 구분자가 아닌 값(${data})을 사용하고 있습니다.`);
    };

    // 커스텀 문자가 한 글자가 아닌 경우
    if (data.length != 3) {
      throw new Error('[ERROR] 잘못된 커스텀 구분자입니다. 커스텀 구분자는 한 개의 문자만 설정 가능합니다.');
    }

    // 숫자를 커스텀 문자로 사용하려는 경우
    if (parseInt(data[2], 10)) {
      throw new Error('[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.');
    }

     // 공백을 커스텀 문자로 사용하려는 경우
     if (data[2] == ' ') {
      throw new Error('[ERROR] 공백은 커스텀 구분자로 사용할 수 없습니다.');
    }

    separator += data[2]; 
    return separator;
  };

  export default getCustomSeparator;
function checkIsCorrectChar(data, separator) {
    const dataArray = data.split('');

    dataArray.map((value) => {
      if (
        !parseInt(value, 10) 
        && !separator.includes(value)
        && value != ' '
      ) {
        throw new Error(`[ERROR] 숫자 및 구분자가 아닌 값(${value})을 사용하고 있습니다.`);
      }
    });

    return true;
  };

  export default checkIsCorrectChar;
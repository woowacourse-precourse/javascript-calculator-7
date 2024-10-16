class App {
  async run() {}

  add(numbers) {
    const initialValue = 0;
    
    return numbers.reduce((accumulator, number) => 
      accumulator + number, initialValue);
  }

  // 쉼표(,) 구분자를 만나기 전까지, 문자열을 더한다.
  // 쉼표(,) 구분자를 만나면, 문자열을 배열에 넣는다.
  // 마지막 쉼표(,) 구분자를 기준으로 뒤에 문자열은 배열에 넣는다.
  splitStringByDelimiter(inputString) {
    let currentToken = '';
    let TokenArray = [];

    for(const element of inputString) {
      if(element === ',') {
        TokenArray.push(currentToken);
        currentToken = '';
      }
      else {
        currentToken += element;
      }
    }
   
    if(currentToken !== ''){
      TokenArray.push(currentToken);
    }

    return TokenArray;
  }

}

export default App;


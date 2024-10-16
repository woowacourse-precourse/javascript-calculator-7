class App {
  async run() {}

  add(numbers) {
    const initialValue = 0;
    
    return numbers.reduce((accumulator, number) => 
      accumulator + number, initialValue);
  }

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


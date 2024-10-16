class App {
  async run() {
    let inputString = '//;\\n1;2;3';
    let delimiters = [";"];

    if(this.checkCustomSplitStringByDelimiter(inputString)){
      inputString = this.getStrippedString(inputString);
    }
    else {
      const stringArray = this.splitStringByDelimiter(inputString, delimiters);
      const numberArray = this.returnNumbers(stringArray);
    }
  }

  add(numbers) {
    const initialValue = 0;
    
    return numbers.reduce((accumulator, number) => 
      accumulator + number, initialValue);
  }

  splitStringByDelimiter(inputString, delimiters) {
    let currentToken = '';
    let TokenArray = [];

    for(const element of inputString) {
      if(delimiters.includes(element)) {
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

  checkCustomSplitStringByDelimiter(inputString) {
    return (inputString[0] === '/' && inputString[1] === '/' 
      && inputString[3] === '\\' && inputString[4] === 'n');
  }

  getStrippedString(inputString) {
    return inputString.slice(5,);
  }

  isValidString(inputString, delimiters) {
    for(const element of inputString) {
      const isNotInclude = !delimiters.includes(element);

      if(isNaN(element) && isNotInclude) {
        return false;
      }
    }
    return true
  }

  returnNumbers(inputArray) {
    return inputArray.map(element => Number(element));
  }
}


export default App;


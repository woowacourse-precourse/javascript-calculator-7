export function tokenizeString(input, dividerList) {
  let tokens = [];
  let currentToken = '';
  let index = 0;

  while (index < input.length) {
    let isDivider = false;
    for (let j = 0; j < dividerList.length; j++) {
      let divider = dividerList[j];

      if (input.substr(index, divider.length) === divider) {
        isDivider = true;

        if (currentToken.length > 0) {
          let convertedToken = convertToNumber(currentToken);
          tokens.push(convertedToken);
          currentToken = '';
        }

        index += divider.length - 1;
        break;
      }
    }
    if (!isDivider) {
      currentToken += input[index];
    }

    index++;
  }
  console.log(tokens);
}

function convertToNumber(token) {
  return parseInt(token);
}
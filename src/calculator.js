import { EMPTY_STRING, ERROR_MESSAGE } from "./message.js";

export function tokenizeString(input, dividerList) {
  let tokens = [];
  let currentToken = "";
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
          currentToken = "";
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
  if (tokens.length === 0) {
    throw new Error(ERROR_MESSAGE.NO_TOKEN);
  }

  const result = sumTokens(tokens);
  return result;
}

function convertToNumber(token) {
  if (token === EMPTY_STRING) {
    throw new Error(ERROR_MESSAGE.EMPTY_TOKEN);
  }
  if (isNaN(token)) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER_TOKEN);
  }
  return parseInt(token);
}

function sumTokens(tokens) {
  return tokens.reduce((acc, cur) => acc + cur, 0);
}

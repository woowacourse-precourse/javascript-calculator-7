
const DelimiterHandler = (input) => {
  let numbers;

  if (input.startsWith('//')) {
    const delimiter = input.substring(2,3);
    numbers = input.split('\\n')[1].split(delimiter);
    
  } else if (!/^[0-9//,:\n]+$/.test(input)) {
    numbers = input.split(/[:,]/);
  }
  return numbers.map(Number);
}

export default DelimiterHandler;
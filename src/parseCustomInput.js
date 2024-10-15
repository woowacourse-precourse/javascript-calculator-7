function parseCustomInput(input) {
  // Ensure input is a string and remove quotes if present
  let str = Array.isArray(input) ? input[0] : input;
  str = str.replace(/^["']|["']$/g, '');

  // Check if the string starts with // and ends with \n
  if (!str.startsWith('//') || !str.includes('\\n')) {
    throw new Error('Invalid input format');
  }

  // Extract the delimiter and the content
  const delimiterEnd = str.indexOf('\\n');
  const delimiter = str.slice(2, delimiterEnd) || ','; // Default to comma if no delimiter
  const content = str.slice(delimiterEnd + 2); // +2 to skip '\n'

  // Split the content using the delimiter
  return content.split(delimiter);
}

// Test the function
const inputs = ['//;\\n1'];
try {
  const result = parseCustomInput(inputs);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

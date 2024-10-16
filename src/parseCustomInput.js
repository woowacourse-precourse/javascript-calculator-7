function parseCustomInput(input) {
  // Ensure input is a string and remove quotes if present
  let str = Array.isArray(input) ? input[0] : input;
  str = str.replace(/^["']|["']$/g, '');

  // Check if the string starts with // and contains \n
  if (!str.startsWith('//') || !str.includes('\\n')) {
    throw new Error('Invalid input format: Must start with // and contain \\n');
  }

  // Extract the delimiter and the content
  const delimiterEnd = str.indexOf('\\n');
  const delimiter = str.slice(2, delimiterEnd) || ','; // Default to comma if no delimiter
  const content = str.slice(delimiterEnd + 2); // +2 to skip '\n'

  // Split the content using the delimiter
  const values = content.split(delimiter);

  // Check if all values are consistent with the delimiter
  if (values.some(value => value.includes(':'))) {
    throw new Error('Inconsistent delimiter usage in the data');
  }

  return values;
}

// Test cases
const testCases = [
  ['//;\\n1;2;3;4'],
  ['//:\\n1:2:3:4'],
  ['//;\\n1:2;3;4'], // This should throw an error
  ['//\\n1,2,3,4'], // No delimiter specified, should use default comma
  ['1,2,3,4'], // Invalid format, should throw an error
];

testCases.forEach((input, index) => {
  console.log(`Test Case ${index + 1}:`);
  try {
    const result = parseCustomInput(input);
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('---');
});

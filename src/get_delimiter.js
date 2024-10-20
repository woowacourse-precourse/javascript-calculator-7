export default function getDelimiter(input) {
  const basic_delimiter = /[,:]/;
  const pattern = input.match(/^\/\/(.*)\\n/);

  if (pattern) {
    const custom_delimiter = pattern[1];
    const new_delimiter = new RegExp(`[${custom_delimiter},:]`);
    return new_delimiter;
  }
  return basic_delimiter;
}

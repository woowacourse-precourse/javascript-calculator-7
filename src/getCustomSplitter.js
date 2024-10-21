function getCustomSplitter(userInput) {
  if (userInput.indexOf('//') !== 0) return [null, userInput];

  userInput = userInput.slice(2);
  const [splitter, string] = userInput.split('\\n');

  return [splitter, string];
}

export default getCustomSplitter;

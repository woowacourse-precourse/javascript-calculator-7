export const parseInput = (input) => {
  const defaultRegExp = /[:,]/g;
  const customRegExp = /^\/\/(.*?)\\n/;
  const customMatch = input.match(customRegExp);

  if (customMatch === null) {
    return input.split(defaultRegExp);
  }
  return input.slice(customMatch[0].length).split(customMatch[1]);
};

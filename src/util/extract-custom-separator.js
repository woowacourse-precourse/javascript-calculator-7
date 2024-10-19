import { SEPARATOR } from '../constant';

function extractCustomSeparator(input) {
  const customMatch = input.match(SEPARATOR.CUSTOM);
  if (customMatch) {
    const separator = customMatch[1];
    const inputWithoutSeparator = input.replace(customMatch[0], '');
    return { separator, inputWithoutSeparator };
  }
  return null;
}

export default extractCustomSeparator;

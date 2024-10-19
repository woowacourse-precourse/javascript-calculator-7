import { CUSTOM_SEPARATOR } from './constant';

function extractCustomSeparator(input) {
  const customMatch = input.match(CUSTOM_SEPARATOR);
  if (customMatch) {
    const separator = customMatch[1];
    const inputWithoutSeparator = input.replace(customMatch[0], '');
    return { separator, inputWithoutSeparator };
  }
  return null;
}

export default extractCustomSeparator;

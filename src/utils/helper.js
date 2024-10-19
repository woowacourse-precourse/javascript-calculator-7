export const findCustomSeparator = (text) => {
  const startIdx = text.indexOf('//');

  if (startIdx === -1) return;

  const newlineIdx = text.indexOf('\\n', startIdx);

  if (newlineIdx === -1) return;

  return text.slice(startIdx + 2, newlineIdx);
};

export const escapeRegExp = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

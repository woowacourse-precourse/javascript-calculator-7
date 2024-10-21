export const escapeRegExp = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

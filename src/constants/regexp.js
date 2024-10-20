const REGEXP = Object.freeze({
  IS_ALL_NUMBER: /^\d+$/,
  IS_NUMBER: /\d+/,
  ESCAPE: /[.*+?^${}()|[\]\\]/g,
});

export default REGEXP;

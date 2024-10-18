export function getSeparatorConflictPattern(customSeparator) {
  return new RegExp(
    customSeparator
      ? `${customSeparator}{2,}|${customSeparator}[,:]|[,:]{2,}|[,:]${customSeparator}`
      : `,{2,}|:{2,}|,:|:,`,
  );
}

export function getSeparatorPattern(customSeparator, followingChar = null) {
  const defaultSeparators = '[,:]';
  const separator = customSeparator
    ? customSeparator + '|' + defaultSeparators
    : defaultSeparators;

  return followingChar === null
    ? new RegExp(`${separator}`)
    : new RegExp(`[${separator}]${followingChar}`);
}

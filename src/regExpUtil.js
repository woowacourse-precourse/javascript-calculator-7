export function getSeparatorConflictPattern(customSeparator) {
  return new RegExp(
    customSeparator
      ? `${customSeparator}{2,}|${customSeparator}[,:]|[,:]{2,}|[,:]${customSeparator}`
      : `,{2,}|:{2,}|,:|:,`,
  );
}

export function getSeparatorPattern(customSeparator, followingChar = '0') {
  const defaultSeparators = '[,:]';
  const separator = customSeparator
    ? `${customSeparator}|${defaultSeparators}`
    : defaultSeparators;

  return new RegExp(`${separator}${followingChar}`);
}

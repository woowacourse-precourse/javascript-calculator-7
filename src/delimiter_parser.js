export function parseInputWithDelimiter(INPUT) {
  if (INPUT.substring(0, 2) === '//') {
    const CUT_IDX = INPUT.lastIndexOf('\\n');
    const PARTITION = INPUT.substring(2, CUT_IDX);
    INPUT = INPUT.substring(CUT_IDX + 2);

    const ESCAPED_PARTITION = PARTITION.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&');
    const REGEX = new RegExp(`,|:|${ESCAPED_PARTITION}`, 'g');
    return INPUT.split(REGEX);
  }
  else {
    return INPUT.split(/,|:/g);
  }
}
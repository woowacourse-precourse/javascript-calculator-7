/**
 *
 * @todo 커스텀 구분자 처리 필요
 */
function parseInput(input) {
  return input.split(/[,:]/).map(Number);
}

export default parseInput;

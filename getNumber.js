function solution(input, custom) {
  let sliceMessage = input.includes("/n") ? input.split("/n") : input;
  return sliceMessage.split(custom);
}

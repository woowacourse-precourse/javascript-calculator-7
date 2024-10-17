function solution(message) {
  const firstIndex = message.indexOf("//");
  const secondIndex = message.indexOf("\n");
  if (firstIndex !== -1 && secondIndex !== -1 && firstIndex < secondIndex) {
    return message.slice(0, firstIndex) + message.slice(secondIndex + 1);
  }
  return message;
}

console.log(solution("//;\n1;2;3"));

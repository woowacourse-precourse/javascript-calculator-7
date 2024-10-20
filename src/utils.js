export function throwError(message) {
  const errorMessage = `[ERROR] ${message}`;
  throw new Error(errorMessage);  
}
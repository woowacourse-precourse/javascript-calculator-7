import { Console } from "@woowacourse/mission-utils";

function errorHandler(occurredError) {
  const DEFAULT_ERROR_MESSAGE = '[ERROR]';
  
  let errorMessage = occurredError.message;
  let finalMessage = `${errorMessage}`;
  
  Console.print(finalMessage);
  throw new Error(DEFAULT_ERROR_MESSAGE)
}

export default errorHandler;
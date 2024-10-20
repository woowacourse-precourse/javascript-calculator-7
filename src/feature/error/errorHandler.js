import { Console } from "@woowacourse/mission-utils";

function errorHandler(occurredError) {
  const DEFAULT_ERROR_MESSAGE = '[ERROR]';
  
  let errorMessage = occurredError.message;
  
  Console.print(errorMessage);
  throw new Error(DEFAULT_ERROR_MESSAGE);
}

export default errorHandler;
import { Console } from "@woowacourse/mission-utils";

function errorHandler(occurredError) {
  const DEFAULT_ERROR_MESSAGE = '[ERROR]';
  
  let errorMessage = occurredError.message;
  let finalMessage = `${DEFAULT_ERROR_MESSAGE} ${errorMessage}`;
  
  Console.print(finalMessage);
}

export default errorHandler;
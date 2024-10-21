// errorHandler.js
import { ERROR_MESSAGES } from "./errorMessage.js";

export const handleError = (error) => {
    console.error(ERROR_MESSAGES.GENERAL_ERROR, error.message);
    // 추가적인 로그나 알림 처리 로직을 여기에 추가 가능
  };
  
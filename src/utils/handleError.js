const handleError = function handleErrorFunc(message) {
  throw new Error(`[ERROR] ${message}`);
};

export default handleError;

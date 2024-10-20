export const handleError = (messages) => {
  const formattedMessage = `[ERROR] ${messages}`;
  throw Error(formattedMessage);
};

export default class ValidationError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = '';
  }
}

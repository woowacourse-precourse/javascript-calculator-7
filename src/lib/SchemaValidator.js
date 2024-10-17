class SchemaValidator {
  /**
   * @template {T}
   *
   * @type {T}
   */
  #value;

  /**
   * @template {T}
   *
   * @param {T} value
   * @returns {SchemaValidator}
   */
  validate(value) {
    this.#value = value;

    return this;
  }

  /**
   * @template {T}
   *
   * @param {(value: T) => boolean} condition
   * @param {{ message: string }} error
   * @returns {SchemaValidator}
   */
  with(condition, error) {
    const { message } = error;

    if (!condition(this.#value)) {
      throw new Error(message);
    }

    return this;
  }
}

export default SchemaValidator;

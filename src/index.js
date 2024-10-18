import App from './App.js';
import Calculator from './Calculator.js';
import Delimiter from './Delimiter.js';
import SchemaValidator from './lib/SchemaValidator.js';
import Validator from './Validator.js';
import View from './View.js';

const app = new App(
  new View(),
  new Validator(new Delimiter(), new SchemaValidator()),
  new Calculator(new Delimiter()),
);

await app.run();

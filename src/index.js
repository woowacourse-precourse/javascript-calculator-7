import App from './App.js';
import Calculator from './app/Calculator.js';
import Delimiter from './app/Delimiter.js';
import SchemaValidator from './lib/SchemaValidator.js';
import Validator from './app/Validator.js';
import View from './app/View.js';

const app = new App(
  new View(),
  new Validator(new SchemaValidator()),
  new Delimiter(),
  new Calculator(),
);

await app.run();

import App from './App.js';

const app = new App();
app.run().catch((error) => {
  console.error(error.message);
});

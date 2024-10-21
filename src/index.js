import App from './App.js';

async function startApp() {
  const app = new App();
  try {
    await app.run();
  } catch (error) {
    // handle any errors here
  }
}

startApp();

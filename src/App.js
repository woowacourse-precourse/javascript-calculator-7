// src/App.js

import { MainController } from './controllers/MainController.js';

export default class App {
	async run() {
		const controller = new MainController();
		await controller.run();
	}
}

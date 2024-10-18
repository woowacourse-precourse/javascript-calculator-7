import App from "./App.js";
import { Console } from "@woowacourse/mission-utils";

const app = new App();
try {
    await app.run();
} catch(error) {
    Console.print(error.message);
}
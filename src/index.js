import App from "./App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const app = new App();
let RESULT = await app.run();
MissionUtils.Console.print(RESULT);
if ((RESULT.length >= 7) & (RESULT.slice(0, 7) == "[ERROR]")) {
  throw new Error();
}

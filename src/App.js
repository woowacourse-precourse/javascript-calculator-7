import { calUtils } from "./util/CalUtil.js";
import { viewUtils } from "./util/ViewUtil.js";

class App {
  async run() {
    try {
      const input = await viewUtils.inputData();
      const result = calUtils.calculate(input);
      await viewUtils.outputData(result);
    } catch (err) {
      viewUtils.errorMessage(err);
    }
  }
}

export default App;

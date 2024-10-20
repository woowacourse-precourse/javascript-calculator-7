import { viewUtils } from "../util/ViewUtil.js";
import { calUtils } from "../util/CalUtil.js";

export class Calculator {
  async run() {
    try {
      const input = await viewUtils.inputData();
      const result = await calUtils.calculate(input);
      await viewUtils.outputData(result);
    } catch (err) {
      await viewUtils.errorMessage(err);
      throw err;
    }
  }
}

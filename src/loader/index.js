import Pipeline from "./Pipeline.js";

import ValidationMiddleware from "../middleware/ValidationMiddleware.js";
import DelimiterMiddleware from "../middleware/DelimiterMiddleware.js";
import FilterMiddleware from "../middleware/FilterMiddleware.js";

const pipelineLoader = async () => {
  const pipeline = new Pipeline();
  await pipeline.addMiddleware(new ValidationMiddleware());
  await pipeline.addMiddleware(new DelimiterMiddleware());
  await pipeline.addMiddleware(new FilterMiddleware());
  return pipeline;
}

export default pipelineLoader;
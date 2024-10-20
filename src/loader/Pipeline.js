class Pipeline {
  constructor() {
    this.middlewares = [];
  }

  async addMiddleware(middleware) {
    this.middlewares.push(middleware);
  }

  async execute(context) {
    let index = 0;
    const next = () => {
      if (index < this.middlewares.length) {
        const middleware = this.middlewares[index];
        index++;
        console.log(middleware)
        middleware.next(context, next);
      }
    };
    next()
    return context;
  }
}

export default Pipeline;
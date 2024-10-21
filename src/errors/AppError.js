class AppError extends Error {

    static PREFIX = '[ERROR]';

    name;

    constructor(errorMessage) {
        const message = `${AppError.PREFIX} ${errorMessage}\n`;
        super(message);
        this.name = this.constructor.name;
    }

}

export default AppError;
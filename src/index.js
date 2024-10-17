import App from "./App.js";

const app = new App();

// 에러 체크 후 ERROR 문구 리턴
async function running() {
    try {
        const PRINT_ANS = await app.run();
        console.log(PRINT_ANS)
    } catch (error) {
        console.log("[ERROR]");
        console.log(error)
    }
};

running();
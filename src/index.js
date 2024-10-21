import App from "./App.js";

const app = new App();

// 에러 체크 후 ERROR 문구 리턴
async function running() {
    try {
        await app.run();
    } catch (error) {
        // console.log("[ERROR]가 발생하였습니다.");
        console.log(error)
    }
};

running();
import App from "../src/App.js";
import Delimiter from "../src/models/Delimiter";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
};
  
const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("Delimiter 클래스 테스트", () => {

    test("(Default) 구분자 사용", async () => {
        const inputs = ["1,2:3,4:5"];
        mockQuestions(inputs);
    
        const logSpy = getLogSpy();
        const outputs = ["결과 : 15"];
    
        const app = new App();
        await app.run();
    
        outputs.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("(Default) 구분자 사용2", async () => {
        const inputs = ["1:2:3,4,5"];
        mockQuestions(inputs);
    
        const logSpy = getLogSpy();
        const outputs = ["결과 : 15"];
    
        const app = new App();
        await app.run();
    
        outputs.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("(Custom) 구분자 사용", async () => {
        const inputs = ["//^\\n1^2^3"];
        mockQuestions(inputs);
    
        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];
    
        const app = new App();
        await app.run();
    
        outputs.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("(Custom) 구분자 사용", async () => {
        const inputs = ["//@@\\n1@@2@@3"];
        mockQuestions(inputs);
    
        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];
    
        const app = new App();
        await app.run();
    
        outputs.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("(Default) 구분자 외의 값이 숫자가 아닌 문자가 포함되어있는 경우 예외처리를 발생한다.", () => {
        expect(() => {
            new Delimiter(/[, :]/, '1,a,3');
        }).toThrow("[ERROR]");
    });

    test("(Custom) 구분자 외의 값이 숫자가 아닌 문자가 포함되어있는 경우 예외처리를 발생한다.", () => {
        expect(() => {
            new Delimiter('//,\n1,a,3', '1,a,3');
        }).toThrow("[ERROR]");
    });

    test("(Default) 사용자 입력값이 음수일 경우 예외처리를 발생한다.", () => {
        expect(() => {
            new Delimiter(/[, :]/, '1,-2,3');
        }).toThrow("[ERROR]");
    });

    test("(Custom) 사용자 입력값이 음수일 경우 예외처리를 발생한다.", () => {
        expect(() => {
            new Delimiter('//,\n1,-2,3', '1,-2,3');
        }).toThrow("[ERROR]");
    });

    test("(Custom) 사용자의 입력값의 구분자가 일관되지 않을 경우 예외처리를 발생한다.", () => {
        expect(() => {
            new Delimiter('//;\n1;2:3', '1,-2,3');
        }).toThrow("[ERROR]");
    });

    test("(Default) 구분자 외의 값에 공백이 포함되어 있는 경우 예외처리를 발생한다.", () => {
        expect(() => {
            new Delimiter(/[, :]/, '1,,3');
        }).toThrow("[ERROR]");
    });

    test("(Custom) 구분자 외의 값에 공백이 포함되어 있는 경우 예외처리를 발생한다.", () => {
        expect(() => {
            new Delimiter('//&\n1,2,3', '1&&3');
        }).toThrow("[ERROR]");
    });
});
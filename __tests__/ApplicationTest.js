import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe('문자열 계산기', () => {
    test('빈 문자열 입력', async () => {
        const inputs = [''];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 0'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });

    test('쉼표로 구분된 두 숫자', async () => {
        const inputs = ['1,2'];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 3'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });

    test('쉼표와 콜론으로 구분된 세 숫자', async () => {
        const inputs = ['1,2:3'];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 6'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });

    test('커스텀 구분자 (세미콜론) 사용', async () => {
        const inputs = ['//;\\n1;2;3'];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 6'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });

    test('커스텀 구분자 (별표) 사용', async () => {
        const inputs = ['//1*\\n1*21*31*4'];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 9'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });

    test('큰 숫자 입력', async () => {
        const inputs = ['1000,2000,3000'];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 6000'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });

    test('음수 입력 예외 처리', async () => {
        const inputs = ['1,-2,3'];
        mockQuestions(inputs);

        const app = new App();
        await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('숫자가 아닌 문자 입력 예외 처리', async () => {
        const inputs = ['1,a,3'];
        mockQuestions(inputs);

        const app = new App();
        await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('구분자 없는 문자열 입력', async () => {
        const inputs = ['123'];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 123'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });

    test('복합적인 구분자 사용', async () => {
        const inputs = ['1,2:3,4:5'];
        mockQuestions(inputs);
        const logSpy = getLogSpy();
        const outputs = ['결과 : 15'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });
});

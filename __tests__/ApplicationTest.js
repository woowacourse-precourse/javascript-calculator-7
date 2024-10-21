import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

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
    test('커스텀 구분자 사용', async () => {
        const inputs = ['//;\\n1'];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ['결과 : 1'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output),
            );
        });
    });

    test('예외 테스트1', async () => {
        const inputs = ['-1,2,3'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
    test('예외 테스트2', async () => {
        const inputs = ['1,2,a'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
    test('예외 테스트3', async () => {
        const inputs = ['//;\\n1;2;3;'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
    test('예외 테스트4', async () => {
        const inputs = ['//;\\n1;2;3:4'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
    test('예외 테스트5', async () => {
        const inputs = ['1,,2'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
    test('예외 테스트6', async () => {
        const inputs = ['//;\\n'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
    });
});

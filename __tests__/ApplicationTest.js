import { describe, test } from '@jest/globals';
import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = global.jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

const getLogSpy = () => {
	const logSpy = global.jest.spyOn(MissionUtils.Console, 'print');
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
			global
				.expect(logSpy)
				.toHaveBeenCalledWith(global.expect.stringContaining(output));
		});
	});

	test('예외 테스트', async () => {
		const inputs = ['-1,2,3'];
		mockQuestions(inputs);

		const app = new App();

		await global.expect(app.run()).rejects.toThrow('[ERROR]');
	});
});

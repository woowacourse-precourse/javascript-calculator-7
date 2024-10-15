import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../src/View';

const getReadLineAsyncSpy = () => {
  const readLineAsyncSpy = jest.spyOn(MissionUtils.Console, 'readLineAsync');
  readLineAsyncSpy.mockClear();

  return readLineAsyncSpy;
};
describe('View', () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  describe('input', () => {
    it('query가 숫자인 경우 에러 없이 input 매서드를 호출할 수 있다', () => {
      const query = 123;

      const readLineAsyncSpy = getReadLineAsyncSpy();
      view.input(query);

      expect(readLineAsyncSpy).toHaveBeenCalled();
    });

    it('query가 문자인 경우 에러 없이 input 매서드를 호출할 수 있다', () => {
      const query = 'string';

      const readLineAsyncSpy = getReadLineAsyncSpy();
      view.input(query);

      expect(readLineAsyncSpy).toHaveBeenCalled();
    });

    it('query가 객체인 경우 에러 없이 input 매서드를 호출할 수 있다', () => {
      const query = {};

      const readLineAsyncSpy = getReadLineAsyncSpy();
      view.input(query);

      expect(readLineAsyncSpy).toHaveBeenCalled();
    });
  });
});

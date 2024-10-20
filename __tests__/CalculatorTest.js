import Calculator from '../src/Calculator';

describe('Calculator 테스트', () => {
  test('덧셈 연산', async () => {
    const input = '//;\\n1;2.2,3.33:4.444,5.5555';

    await expect(new Calculator(input).add()).toEqual(16.5295);
  });
});

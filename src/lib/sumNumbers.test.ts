import sumNumbers from './sumNumbers';

describe('sumNumbers()', () => {
  it('1 + 1 returns 2', () => {
    const result = sumNumbers(1, 1);
    expect(result).toBe(2);
  });
});

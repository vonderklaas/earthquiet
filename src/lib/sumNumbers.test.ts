import sumNumbers from './sumNumbers';

describe('sumNumbers()', () => {
  it('returns 2 when passing 1, 1', () => {
    const result = sumNumbers(1, 1);
    expect(result).toBe(2);
  });
});

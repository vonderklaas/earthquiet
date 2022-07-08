import readingTime from './readingTime';

describe('readingTime()', () => {
  it('returns 1 minute for 265 symbols', () => {
    const result = readingTime('265');
    expect(result).toBe(1);
  });
});

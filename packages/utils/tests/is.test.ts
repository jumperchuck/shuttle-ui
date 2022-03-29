import { isEqual } from '../src/is';

describe('isEqual', () => {
  it('is equal for array', () => {
    expect(isEqual([1], [1])).toBe(true);
    expect(isEqual([null], [1])).toBe(false);
    expect(isEqual([null], [null])).toBe(true);
  });
});

import getPath from '../src/getPath';

describe('getPath', () => {
  it('get exist value', () => {
    expect(getPath({ a: 1 }, 'a')).toBe(1);
    expect(getPath({ a: { b: 1 } }, 'a.b')).toBe(1);
    expect(getPath({ a: { b: 1 }, 'a.b.c': 2 }, 'a.b.c')).toBe(2);
    expect(getPath({ 0: 1 }, 0)).toBe(1);
    expect(getPath([1], 0)).toBe(1);
  });

  it('get no exist input value', () => {
    expect(getPath({ a: 1 }, 'b')).toBe(undefined);
    expect(getPath({ a: { b: 1 } }, 'a.a')).toBe(undefined);
    expect(getPath([1], -1)).toBe(undefined);
    expect(getPath({ a: 1 }, 'b', '')).toBe('');
    expect(getPath([1], -1, null)).toBe(null);
  });
});

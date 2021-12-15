import getPath from '../src/getPath';

describe('getPath', () => {
  it('get exist value', () => {
    expect(getPath({ a: 1 }, 'a')).toBe(1);
    expect(getPath({ a: { b: 1 } }, 'a.b')).toBe(1);
    expect(getPath({ a: { b: 1 }, 'a.b.c': 2 }, 'a.b.c')).toBe(2);
  });

  it('get no exist input value', () => {
    expect(getPath({ a: 1 }, 'b')).toBe(null);
    expect(getPath({ a: { b: 1 } }, 'a.a')).toBe(null);
    expect(getPath(null, 'a.a')).toBe(null);
  });
});

import getValue from '../src/getValue';

describe('getValue', () => {
  it('get exist value', () => {
    expect(getValue({ a: 1 }, 'a')).toBe(1);
    expect(getValue({ a: { b: 1 } }, 'a.b')).toBe(1);
    expect(getValue({ a: { b: 1 }, 'a.b.c': 2 }, 'a.b.c')).toBe(2);
    expect(getValue({ 0: 1 }, 0)).toBe(1);
    expect(getValue([1], 0)).toBe(1);
  });

  it('get no exist input value', () => {
    expect(getValue({ a: 1 }, 'b')).toBe(undefined);
    expect(getValue({ a: { b: 1 } }, 'a.a')).toBe(undefined);
    expect(getValue([1], -1)).toBe(undefined);
    expect(getValue({ a: 1 }, 'b', '')).toBe('');
    expect(getValue([1], -1, null)).toBe(null);
  });

  it('get exist for function', () => {
    expect(getValue(() => 1, 'a')).toBe(1);
    expect(getValue((value: any) => value, 'a')).toBe('a');
    expect(getValue(() => null, 'a')).toBe(null);
    expect(getValue(() => null, 'a')).toBe(null);
  });

  it('get no exist value for function', () => {
    expect(getValue((value: any) => value, undefined)).toBe(undefined);
    expect(getValue((value: any) => value, undefined, 1)).toBe(1);
    expect(getValue(() => undefined, 'a')).toBe('a');
    expect(getValue(() => undefined, 'a', 3)).toBe(3);
  });

  it('get exist value for array', () => {
    expect(getValue([1], 0)).toBe(1);
    expect(getValue([null], 0)).toBe(null);
  });

  it('get no exist value for array', () => {
    expect(getValue([1], -1)).toBe(-1);
    expect(getValue([null], -1, 3)).toBe(3);
    expect(getValue([null], -1, null)).toBe(null);
  });
});

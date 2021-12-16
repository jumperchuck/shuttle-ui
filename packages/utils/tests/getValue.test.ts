import getValue from '../src/getValue';

describe('getValue', () => {
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

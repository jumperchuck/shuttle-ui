import { Dimensions } from 'react-native';
import { getValueByColorMode, getValueByBreakpoints } from '../src/utils';

describe('getValueByColorMode', () => {
  it('get main value', () => {
    expect(getValueByColorMode({ main: 1 }, null)).toBe(1);
    expect(getValueByColorMode({ main: 0 }, 'other')).toBe(0);
    expect(getValueByColorMode({ main: false }, 'main')).toBe(false);
    expect(getValueByColorMode({ main: '' }, {})).toBe('');
    expect(getValueByColorMode({ main: -1 }, [])).toBe(-1);
    expect(getValueByColorMode({ main: null }, true)).toBe(null);
  });

  it('return input value', () => {
    const object = {};
    expect(getValueByColorMode(null, 'other')).toBe(null);
    expect(getValueByColorMode(undefined, 'other')).toBe(undefined);
    expect(getValueByColorMode(1, 'other')).toBe(1);
    expect(getValueByColorMode('1', 'other')).toBe('1');
    expect(getValueByColorMode(object, 'other')).toBe(object);
  });

  it('get target value', () => {
    const object = { main: 0, light: 2, dark: 3 };
    expect(getValueByColorMode(object, 'main')).toBe(0);
    expect(getValueByColorMode(object, 'light')).toBe(2);
    expect(getValueByColorMode(object, 'dark')).toBe(3);
  });
});

describe('getValueByBreakpoints', () => {
  // reset it to testing
  const reset = (width: number) => {
    Dimensions.get = () => ({ width, height: 0, scale: 0, fontScale: 0 });
  };

  const breakpoints = { xs: 0, sm: 400, md: 600, lg: 900 };

  it('get xs value', () => {
    reset(100);
    expect(getValueByBreakpoints({ xs: 0, sm: 1, md: 2, lg: 3 }, breakpoints)).toBe(0);
    expect(getValueByBreakpoints({ xs: 0, sm: 1, md: 2 }, breakpoints)).toBe(0);
    expect(getValueByBreakpoints({ xs: 0, sm: 1 }, breakpoints)).toBe(0);
    expect(getValueByBreakpoints({ xs: 0 }, breakpoints)).toBe(0);
  });

  it('get sm value', () => {
    reset(breakpoints.sm);
    expect(getValueByBreakpoints({ xs: 1, sm: 2, md: 3, lg: 4 }, breakpoints)).toBe(2);
    expect(getValueByBreakpoints({ xs: 1, sm: 2, md: 3 }, breakpoints)).toBe(2);
    expect(getValueByBreakpoints({ xs: 1, sm: 2 }, breakpoints)).toBe(2);
    expect(getValueByBreakpoints({ xs: 1 }, breakpoints)).toBe(1);
  });

  it('get md value', () => {
    reset(breakpoints.md);
    expect(getValueByBreakpoints({ xs: 1, sm: 2, md: 3, lg: 4 }, breakpoints)).toBe(3);
    expect(getValueByBreakpoints({ xs: 1, sm: 2, md: 3 }, breakpoints)).toBe(3);
    expect(getValueByBreakpoints({ xs: 1, sm: 2 }, breakpoints)).toBe(2);
    expect(getValueByBreakpoints({ xs: 1 }, breakpoints)).toBe(1);
  });

  it('get lg value', () => {
    reset(breakpoints.lg);
    expect(getValueByBreakpoints({ xs: 1, sm: 2, md: 3, lg: 4 }, breakpoints)).toBe(4);
    expect(getValueByBreakpoints({ xs: 1, sm: 2, md: 3 }, breakpoints)).toBe(3);
    expect(getValueByBreakpoints({ xs: 1, sm: 2 }, breakpoints)).toBe(2);
    expect(getValueByBreakpoints({ xs: 1 }, breakpoints)).toBe(1);
  });
});

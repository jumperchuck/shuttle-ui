import { Dimensions } from 'react-native';
import { getColorModeValue, getBreakpointsValue } from '../src/utils';

describe('getColorModeValue', () => {
  it('get main value', () => {
    expect(getColorModeValue({ main: 1 }, null)).toBe(1);
    expect(getColorModeValue({ main: 0 }, 'other')).toBe(0);
    expect(getColorModeValue({ main: false }, 'main')).toBe(false);
    expect(getColorModeValue({ main: '' }, {})).toBe('');
    expect(getColorModeValue({ main: -1 }, [])).toBe(-1);
    expect(getColorModeValue({ main: null }, true)).toBe(null);
  });

  it('return input value', () => {
    const object = {};
    expect(getColorModeValue(null, 'other')).toBe(null);
    expect(getColorModeValue(undefined, 'other')).toBe(undefined);
    expect(getColorModeValue(1, 'other')).toBe(1);
    expect(getColorModeValue('1', 'other')).toBe('1');
    expect(getColorModeValue(object, 'other')).toBe(object);
  });

  it('get target value', () => {
    const object = { main: 0, light: 2, dark: 3 };
    expect(getColorModeValue(object, 'main')).toBe(0);
    expect(getColorModeValue(object, 'light')).toBe(2);
    expect(getColorModeValue(object, 'dark')).toBe(3);
  });
});

describe('getBreakpointsValue', () => {
  // reset it to testing
  const reset = (width: number) => {
    Dimensions.get = () => ({ width, height: 0, scale: 0, fontScale: 0 });
  };

  const breakpoints = { xs: 0, sm: 400, md: 600, lg: 900 };

  it('get xs value', () => {
    reset(100);
    expect(getBreakpointsValue({ xs: 0, sm: 1, md: 2, lg: 3 }, breakpoints)).toBe(0);
    expect(getBreakpointsValue({ xs: 0, sm: 1, md: 2 }, breakpoints)).toBe(0);
    expect(getBreakpointsValue({ xs: 0, sm: 1 }, breakpoints)).toBe(0);
    expect(getBreakpointsValue({ xs: 0 }, breakpoints)).toBe(0);
  });

  it('get sm value', () => {
    reset(breakpoints.sm);
    expect(getBreakpointsValue({ xs: 1, sm: 2, md: 3, lg: 4 }, breakpoints)).toBe(2);
    expect(getBreakpointsValue({ xs: 1, sm: 2, md: 3 }, breakpoints)).toBe(2);
    expect(getBreakpointsValue({ xs: 1, sm: 2 }, breakpoints)).toBe(2);
    expect(getBreakpointsValue({ xs: 1 }, breakpoints)).toBe(1);
  });

  it('get md value', () => {
    reset(breakpoints.md);
    expect(getBreakpointsValue({ xs: 1, sm: 2, md: 3, lg: 4 }, breakpoints)).toBe(3);
    expect(getBreakpointsValue({ xs: 1, sm: 2, md: 3 }, breakpoints)).toBe(3);
    expect(getBreakpointsValue({ xs: 1, sm: 2 }, breakpoints)).toBe(2);
    expect(getBreakpointsValue({ xs: 1 }, breakpoints)).toBe(1);
  });

  it('get lg value', () => {
    reset(breakpoints.lg);
    expect(getBreakpointsValue({ xs: 1, sm: 2, md: 3, lg: 4 }, breakpoints)).toBe(4);
    expect(getBreakpointsValue({ xs: 1, sm: 2, md: 3 }, breakpoints)).toBe(3);
    expect(getBreakpointsValue({ xs: 1, sm: 2 }, breakpoints)).toBe(2);
    expect(getBreakpointsValue({ xs: 1 }, breakpoints)).toBe(1);
  });
});

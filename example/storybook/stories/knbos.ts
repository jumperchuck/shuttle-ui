import { ThemeColors, ThemeText, ThemeSpacings, ThemeRadius } from 'shuttle-ui';
import theme from '../theme';

export const colorOptions = Object.keys(theme.colors).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
) as Record<keyof ThemeColors, keyof ThemeColors>;

export const fontOptions = Object.keys(theme.text.fonts).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
) as Record<keyof ThemeText['fonts'], keyof ThemeText['fonts']>;

export const fontSizeOptions = Object.keys(theme.text.sizes).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
) as Record<keyof ThemeText['sizes'], keyof ThemeText['sizes']>;

export const fontWeightOptions = Object.keys(theme.text.weights).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
) as Record<keyof ThemeText['weights'], keyof ThemeText['weights']>;

export const spacingOptions = Object.keys(theme.spacings).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
) as Record<keyof ThemeSpacings, keyof ThemeSpacings>;

export const radiusOptions = Object.keys(theme.radius).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
) as Record<keyof ThemeRadius, keyof ThemeRadius>;

import theme from '../theme';

export const colorOptions = Object.keys(theme.colors).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
);

export const fontOptions = Object.keys(theme.fontFamilies).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
);

export const fontSizeOptions = Object.keys(theme.fontSizes).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
);

export const fontWeightOptions = Object.keys(theme.fontWeights).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
);

export const spacingOptions = Object.keys(theme.spacings).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
);

export const radiusOptions = Object.keys(theme.radius).reduce(
  (object, key) => ({
    ...object,
    [`${key}`]: key,
  }),
  {},
);

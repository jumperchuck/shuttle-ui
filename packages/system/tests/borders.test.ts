import borders from '../src/borders';

const theme = {
  borders: {
    0: {
      borderWidth: 0,
      borderColor: 'black',
    },
    1: {
      borderWidth: 1,
      borderColor: 'red',
    },
  },
  radius: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },
};

it('border style', () => {
  expect(borders({ border: 0, theme })).toStrictEqual(theme.borders[0]);

  expect(borders({ border: -1, theme })).toStrictEqual({});

  expect(borders({ borderTop: 1, theme })).toStrictEqual({
    borderTopWidth: theme.borders[1].borderWidth,
    borderTopColor: theme.borders[1].borderColor,
  });

  expect(borders({ borderBottom: 1, theme })).toStrictEqual({
    borderBottomWidth: theme.borders[1].borderWidth,
    borderBottomColor: theme.borders[1].borderColor,
  });

  expect(borders({ borderLeft: 1, theme })).toStrictEqual({
    borderLeftWidth: theme.borders[1].borderWidth,
    borderLeftColor: theme.borders[1].borderColor,
  });

  expect(borders({ borderRight: 1, theme })).toStrictEqual({
    borderRightWidth: theme.borders[1].borderWidth,
    borderRightColor: theme.borders[1].borderColor,
  });

  expect(borders({ borderX: 0, borderY: 1, theme })).toStrictEqual({
    borderLeftWidth: theme.borders[0].borderWidth,
    borderLeftColor: theme.borders[0].borderColor,
    borderRightWidth: theme.borders[0].borderWidth,
    borderRightColor: theme.borders[0].borderColor,
    borderTopWidth: theme.borders[1].borderWidth,
    borderTopColor: theme.borders[1].borderColor,
    borderBottomWidth: theme.borders[1].borderWidth,
    borderBottomColor: theme.borders[1].borderColor,
  });
});

it('radius style', () => {
  expect(
    borders({
      borderRadius: 'md',
      borderTopRadius: 'md',
      borderBottomRadius: 'md',
      theme,
    }),
  ).toStrictEqual({
    borderRadius: theme.radius.md,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
  });

  expect(
    borders({
      borderLeftRadius: 'md',
      borderRightRadius: 'md',
      theme,
    }),
  ).toStrictEqual({
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
  });

  expect(
    borders({
      borderTopLeftRadius: 'md',
      borderTopRightRadius: 'md',
      borderBottomLeftRadius: 'md',
      borderBottomRightRadius: 'md',
      theme,
    }),
  ).toStrictEqual({
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
  });

  expect(
    borders({
      borderRadius: 'none',
      theme,
    }),
  ).toStrictEqual({});
});

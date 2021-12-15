import createColors from '../src/createColors';

it('test', () => {
  expect(
    createColors({
      a: '#fff',
      b: { main: '#000' },
      c: { 50: '#000', 500: '#000', 900: '#000' },
    }),
  ).toStrictEqual({
    a: { main: '#fff' },
    b: { main: '#000' },
    c: { 50: '#000', 500: '#000', 900: '#000', main: '#000' },
  });
});

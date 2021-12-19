import mergeProps from '../src/mergeProps';

type Dict = Record<string, any>;

describe('mergeProps', () => {
  it('merge primitive type', () => {
    const defaultProps: Dict = {
      a: '',
      b: 1,
      c: true,
      d: null,
    };
    const props = {
      a: 1,
      b: false,
    };
    const copyDefaultProps = JSON.parse(JSON.stringify(defaultProps));
    const copyProps = JSON.parse(JSON.stringify(props));
    const newProps = mergeProps(defaultProps, props);

    expect(newProps).toStrictEqual({ ...defaultProps, ...props });
    expect(defaultProps).toStrictEqual(copyDefaultProps);
    expect(props).toStrictEqual(copyProps);
  });

  it('merge reference type', () => {
    const defaultProps: Dict = {
      a: [1],
      b: {
        name: '',
      },
    };
    const props = {
      a: 2,
      b: {
        name: 4,
      },
    };
    const copyDefaultProps = JSON.parse(JSON.stringify(defaultProps));
    const copyProps = JSON.parse(JSON.stringify(props));
    const newProps = mergeProps(defaultProps, props);

    expect(newProps).toStrictEqual({
      a: 2,
      b: {
        name: 4,
      },
    });
    expect(defaultProps).toStrictEqual(copyDefaultProps);
    expect(props).toStrictEqual(copyProps);
  });

  it('merge style prop, both object', () => {
    const defaultProps: Dict = {
      style: {
        color: 'red',
      },
    };
    const props = {
      style: {
        color: 'white',
        size: 2,
      },
    };
    const copyDefaultProps = JSON.parse(JSON.stringify(defaultProps));
    const copyProps = JSON.parse(JSON.stringify(props));
    const newProps = mergeProps(defaultProps, props);

    expect(newProps).toStrictEqual({
      style: [defaultProps.style, props.style],
    });
    expect(defaultProps).toStrictEqual(copyDefaultProps);
    expect(props).toStrictEqual(copyProps);
  });

  it('merge style prop, both array', () => {
    const defaultProps: Dict = {
      style: [
        {
          color: 'red',
        },
      ],
    };
    const props = {
      style: [
        {
          color: 'white',
          size: 2,
        },
      ],
    };
    const copyDefaultProps = JSON.parse(JSON.stringify(defaultProps));
    const copyProps = JSON.parse(JSON.stringify(props));
    const newProps = mergeProps(defaultProps, props);

    expect(newProps).toStrictEqual({
      style: [{ color: 'red' }, { color: 'white', size: 2 }],
    });
    expect(defaultProps).toStrictEqual(copyDefaultProps);
    expect(props).toStrictEqual(copyProps);
  });

  it('merge style prop, different type', function () {
    const defaultProps: Dict = {
      style: { color: 'red' },
      aStyle: [{ color: 'red' }],
    };
    const props = {
      style: [
        {
          color: 'white',
          size: 2,
        },
      ],
      aStyle: { size: 2 },
    };
    const copyDefaultProps = JSON.parse(JSON.stringify(defaultProps));
    const copyProps = JSON.parse(JSON.stringify(props));
    const newProps = mergeProps(defaultProps, props);

    expect(newProps).toStrictEqual({
      style: [defaultProps.style, ...props.style],
      aStyle: [...defaultProps.aStyle, props.aStyle],
    });
    expect(defaultProps).toStrictEqual(copyDefaultProps);
    expect(props).toStrictEqual(copyProps);
  });
});

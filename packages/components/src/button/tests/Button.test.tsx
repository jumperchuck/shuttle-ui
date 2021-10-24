import React from 'react';
import { render } from '@testing-library/react-native';

import Button from '../';

describe('Button Component', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<Button>Button</Button>);
    expect(toJSON()).toMatchSnapshot();
  });
});

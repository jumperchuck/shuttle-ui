import React from 'react';
import {Checkbox, Space} from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  return (
    <>
      <Checkbox>Value 1</Checkbox>
      <Checkbox checked>Value 2</Checkbox>
      <Checkbox indeterminate>Value 2</Checkbox>
    </>
  );
};

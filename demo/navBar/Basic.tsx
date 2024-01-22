import React from 'react';
import { NavBar } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  return (
    <NavBar>
      <NavBar.Left>Back</NavBar.Left>
      <NavBar.Title>Title</NavBar.Title>
      <NavBar.Right>Done</NavBar.Right>
    </NavBar>
  );
};

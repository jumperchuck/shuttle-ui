import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Text, TextProps } from '../text/Text';

export interface NavBarTitleProps extends TextProps {}

export const NavBarTitle: ShuttleUIComponent<NavBarTitleProps> = (props) => {
  const { children, ...rest } = useResolutionProps('NavBarTitle', props);

  return (
    <Text flex={1} size="xl" align="center" alignSelf="center" {...rest}>
      {children}
    </Text>
  );
};

export default withShuttleUI(NavBarTitle);

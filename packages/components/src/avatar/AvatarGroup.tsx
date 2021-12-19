import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { Space, SpaceProps } from '../space/Space';
import Avatar, { AvatarProps } from './Avatar';
import { ShuttleUIProps } from '../types';

export interface AvatarGroupProps extends SpaceProps {
  max?: number;
  avatarProps?: AvatarProps;
}

export const AvatarGroup = (props: ShuttleUIProps<AvatarGroupProps>) => {
  const { max = 4, avatarProps, children, ...rest } = props;

  const content = React.Children.toArray(children)
    .filter((child) => child != null && typeof child !== 'boolean')
    .map((child, index, arr) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          key: index,
          ...avatarProps,
          zIndex: arr.length - index,
          ...child.props,
        });
      }
      return child;
    });

  if (content.length > max) {
    const count = content.length - max;
    content.splice(max, count);
    content.push(
      <Avatar
        key={content.length + 1}
        bgColor="blue.500"
        title={`+${count}`}
        {...avatarProps}
        zIndex={0}
      />,
    );
  }

  return <Space {...rest}>{content}</Space>;
};

export default withColorMode(withTheme(AvatarGroup, 'AvatarGroup'));

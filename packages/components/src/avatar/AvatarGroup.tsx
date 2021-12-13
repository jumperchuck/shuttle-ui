import React from 'react';
import { withTheme } from '@shuttle-ui/theme';

import { Space, SpaceProps } from '../space';
import Avatar, { AvatarProps } from './Avatar';

export interface AvatarGroupProps extends SpaceProps {
  max?: number;
  avatarProps?: AvatarProps;
}

export const AvatarGroup: React.FC<AvatarGroupProps & { theme: ShuttleUI.Theme }> = (
  props,
) => {
  const { spacing = -10, max = 4, avatarProps, children, ...rest } = props;

  const childProps = {
    borderWidth: 1,
    borderColor: 'white',
    ...avatarProps,
  };

  const content = React.Children.toArray(children)
    .filter((child) => child != null && typeof child !== 'boolean')
    .map((child, index, arr) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...childProps,
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
      <Avatar bgColor="blue.500" title={`+${count}`} {...childProps} zIndex={0} />,
    );
  }

  return (
    <Space spacing={spacing} {...rest}>
      {content}
    </Space>
  );
};

export default withTheme(AvatarGroup, 'AvatarGroup');

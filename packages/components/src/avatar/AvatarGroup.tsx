import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import Avatar, { AvatarProps } from './Avatar';

export interface AvatarGroupProps extends SpaceProps {
  max?: number;
  avatarProps?: AvatarProps;
}

export const AvatarGroup: ShuttleUIComponent<AvatarGroupProps> = (props) => {
  const {
    max = 4,
    avatarProps = {
      borderWidth: 1,
      borderColor: 'white',
    },
    children,
    ...rest
  } = useResolutionProps('AvatarGroup', props);

  const content = React.Children.toArray(children)
    .filter((child) => child != null && typeof child !== 'boolean')
    .map((child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          key: index,
          ...avatarProps,
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

  return (
    <Space direction="row" spacing={-10} {...rest}>
      {content}
    </Space>
  );
};

export default withShuttleUI(AvatarGroup);

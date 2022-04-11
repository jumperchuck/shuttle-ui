import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { usePrivateState, useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import Collapse, { CollapseProps } from './Collapse';

export interface CollapseGroupProps extends SpaceProps {
  accordion?: boolean;
  defaultActiveKeys?: string[];
  activeKeys?: string[];
  onChange?: (activeKeys: string[]) => void;
  collapseProps?: CollapseProps;
}

export const CollapseGroup: ShuttleUIComponent<CollapseGroupProps> = (props) => {
  const {
    accordion = true,
    defaultActiveKeys,
    activeKeys: activeKeysProp,
    onChange,
    collapseProps,
    children,
    ...rest
  } = useResolutionProps('CollapseGroup', props);

  const [activeKeys, setActiveKeys] = usePrivateState(
    defaultActiveKeys || [],
    activeKeysProp,
    onChange,
  );

  const transformChild: SpaceProps['transformChild'] = (child, index) => {
    if (!React.isValidElement(child) || child.type !== Collapse) {
      return child;
    }
    const key = `${child.key ?? index}`;
    return React.cloneElement(child, {
      active: activeKeys.includes(key),
      onChange: (active: boolean) => {
        const keyIndex = activeKeys.indexOf(key);
        let newActiveKeys = [...activeKeys];
        if (active && keyIndex < 0) {
          if (accordion) {
            newActiveKeys = [key];
          } else {
            newActiveKeys.push(key);
          }
        } else if (!active && keyIndex > -1) {
          if (accordion) {
            newActiveKeys = [];
          } else {
            newActiveKeys.splice(keyIndex, 1);
          }
        }
        child.props.onChange?.(active);
        setActiveKeys(newActiveKeys);
      },
      ...collapseProps,
    });
  };

  return (
    <Space direction="column" spacing={0} transformChild={transformChild} {...rest}>
      {children}
    </Space>
  );
};

export default withShuttleUI(CollapseGroup);

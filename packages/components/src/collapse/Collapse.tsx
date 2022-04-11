import React, { useCallback } from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { usePrivateState, useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { CollapseContext } from './context';

export interface CollapseProps extends BoxProps {
  defaultActive?: boolean;
  active?: boolean;
  onChange?: (active: boolean) => void;
}

const Collapse: ShuttleUIComponent<CollapseProps> = (props) => {
  const {
    defaultActive,
    active: activeProp,
    onChange,
    children,
    ...rest
  } = useResolutionProps('Collapse', props);

  const [active, setActive] = usePrivateState(!!defaultActive, activeProp, onChange);

  const open = useCallback(() => {
    setActive(true);
  }, []);

  const close = useCallback(() => {
    setActive(false);
  }, []);

  const toggle = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);

  return (
    <CollapseContext.Provider value={{ active, open, close, toggle }}>
      <Box border={0} {...rest}>
        {children}
      </Box>
    </CollapseContext.Provider>
  );
};

export default withShuttleUI(Collapse);

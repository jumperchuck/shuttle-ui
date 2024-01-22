import React, { useContext } from 'react';
import { SpacingPropType } from '@shuttle-ui/system';
import { ResponsiveValue } from '@shuttle-ui/theme';

export type GridContextType = {
  spacing: ResponsiveValue<SpacingPropType>;
};

export const GridContext = React.createContext<GridContextType>({
  spacing: 0,
});

export const useGridContext = () => useContext(GridContext);

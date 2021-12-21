import React, { useContext } from 'react';
import { SpacingPropType } from '@shuttle-ui/system';
import { ResponsiveValue } from '@shuttle-ui/theme';

export const GridContext = React.createContext<{
  spacing: ResponsiveValue<SpacingPropType>;
}>({
  spacing: 0,
});

export const GridProvider = GridContext.Provider;

export const GridConsumer = GridContext.Consumer;

export function useSpacing() {
  return useContext(GridContext);
}

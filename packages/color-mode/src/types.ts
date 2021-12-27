import { ComponentProps, ComponentType, FC } from 'react';

export type ColorMode = 'light' | 'dark' | null | undefined;

export type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (value: ColorMode) => void;
};

export interface ColorModeProviderProps {
  colorMode: ColorMode;
}

export type WithColorModeComponent<C extends ComponentType> = FC<
  WithColorModeProps<Omit<ComponentProps<C>, keyof ColorModeContextType>>
>;

export type WithColorModeProps<P> = P & {
  _light?: P;
  _dark?: P;
};

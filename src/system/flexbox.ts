import { ViewStyle } from 'react-native';
import style from './style';

export interface FlexboxStyleProps {
  center?: boolean;
  flex?: ViewStyle['flex'];
  flexWrap?: ViewStyle['flexWrap'];
  flexDirection?: ViewStyle['flexDirection'];
  flexBasis?: ViewStyle['flexBasis'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignContent?: ViewStyle['alignContent'];
  alignSelf?: ViewStyle['alignSelf'];
}

const centerStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const center = style<ViewStyle>({
  prop: ['center'],
  transform: (value) => {
    if (!value) return {};
    return centerStyle;
  },
});

export const flex = style<ViewStyle['flex']>({
  prop: ['flex'],
});

export const flexWrap = style<ViewStyle['flexWrap']>({
  prop: ['flexWrap'],
});

export const flexDirection = style<ViewStyle['flexDirection']>({
  prop: ['flexDirection'],
});

export const flexBasis = style<ViewStyle['flexBasis']>({
  prop: ['flexBasis'],
});

export const flexGrow = style<ViewStyle['flexGrow']>({
  prop: ['flexGrow'],
});

export const flexShrink = style<ViewStyle['flexShrink']>({
  prop: ['flexShrink'],
});

export const justifyContent = style<ViewStyle['justifyContent']>({
  prop: ['justifyContent'],
});

export const alignItems = style<ViewStyle['alignItems']>({
  prop: ['alignItems'],
});

export const alignContent = style<ViewStyle['alignContent']>({
  prop: ['alignContent'],
});

export const alignSelf = style<ViewStyle['alignSelf']>({
  prop: ['alignSelf'],
});

const flexbox = [
  center,
  flex,
  flexWrap,
  flexDirection,
  flexBasis,
  flexGrow,
  flexShrink,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
] as const;

export default flexbox;
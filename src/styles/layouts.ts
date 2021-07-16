import { Dimensions, Platform, StatusBar } from 'react-native';

// android设备下，window是除去底部导航栏的大小
export const window = Dimensions.get('window');
// 这个是屏幕大小
export const screen = Dimensions.get('screen');

// iphone x, xs
export const xWidth = 375;
export const xHeight = 812;

// iphone xr, xs max
export const xsMaxWidth = 414;
export const xsMaxHeight = 896;

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const isIphoneX =
  (isIOS && window.height === xHeight && window.width === xWidth) ||
  (window.height === xWidth && window.width === xHeight) ||
  (window.height === xsMaxHeight && window.width === xsMaxWidth) ||
  (window.height === xsMaxWidth && window.width === xsMaxHeight);

export const statusBarHeight = StatusBar.currentHeight || (isIphoneX ? 34 : 20);

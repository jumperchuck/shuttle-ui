import React from 'react';

export type IconType =
  | 'zocial'
  | 'octicon'
  | 'material'
  | 'material-community'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'simple-line-icon'
  | 'feather'
  | 'ant-design'
  | 'fontisto'
  | string;

export const icons: Record<string, React.ComponentType<any>> = {};

export const registerIconType = (type: string, icon: React.ComponentType<any>) => {
  icons[type] = icon;
};

export const registerIconTypes = (types: Record<string, React.ComponentType<any>>) => {
  Object.assign(icons, types);
};

export default (type: IconType) => {
  switch (type) {
    // case 'zocial':
    //   return require('react-native-vector-icons/Zocial').default;
    // case 'octicon':
    //   return require('react-native-vector-icons/Octicons').default;
    // case 'material':
    //   return require('react-native-vector-icons/MaterialIcons').default;
    // case 'material-community':
    //   return require('react-native-vector-icons/MaterialCommunityIcons').default;
    // case 'ionicon':
    //   return require('react-native-vector-icons/Ionicons').default;
    // case 'foundation':
    //   return require('react-native-vector-icons/Foundation').default;
    // case 'evilicon':
    //   return require('react-native-vector-icons/EvilIcons').default;
    // case 'entypo':
    //   return require('react-native-vector-icons/Entypo').default;
    // case 'font-awesome':
    //   return require('react-native-vector-icons/FontAwesome').default;
    // case 'font-awesome-5':
    //   return require('react-native-vector-icons/FontAwesome5').default;
    // case 'simple-line-icon':
    //   return require('react-native-vector-icons/SimpleLineIcons').default;
    // case 'feather':
    //   return require('react-native-vector-icons/Feather').default;
    // case 'ant-design':
    //   return require('react-native-vector-icons/AntDesign').default;
    // case 'fontisto':
    //   return require('react-native-vector-icons/Fontisto').default;
    default:
      if (Object.prototype.hasOwnProperty.call(icons, type)) {
        return icons[type];
      }
      // return require('react-native-vector-icons/MaterialIcons').default;
      return null;
  }
};

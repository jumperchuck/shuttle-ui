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
    default:
      if (Object.prototype.hasOwnProperty.call(icons, type)) {
        return icons[type];
      }
      return null;
  }
};

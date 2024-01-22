import { ActionSheetItemProps } from '../actionSheet';

export type ActionSheetItemTheme = ShuttleUI.ThemeComponent<ActionSheetItemProps>;

const actionSheetItem: ActionSheetItemTheme = {
  defaultProps: {},
  propConfigs: {
    icon: () => {
      return {
        justifyContent: 'flex-start',
        textProps: {
          flex: 1,
        },
      };
    },
    leftIcon: () => {
      return {
        justifyContent: 'flex-start',
        textProps: {
          flex: 1,
        },
      };
    },
    rightIcon: () => {
      return {
        justifyContent: 'flex-start',
        textProps: {
          flex: 1,
        },
      };
    },
  },
  configPriorities: [],
};

export default actionSheetItem;

import { SpaceProps } from '../space';

export type SpaceTheme = ShuttleUI.ThemeComponent<SpaceProps>;

const spaceTheme: SpaceTheme = {
  defaultProps: {},
  propConfigs: {
    align: {
      start: (props) => {
        const { direction } = props;
        if (direction === 'row') {
          return {
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
          };
        } else {
          return {
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
          };
        }
      },
      center: (props) => {
        const { direction } = props;
        return {
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: direction === 'row' ? 'nowrap' : 'wrap',
        };
      },
      end: (props) => {
        const { direction } = props;
        if (direction === 'row') {
          return {
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexWrap: 'wrap',
          };
        } else {
          return {
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
          };
        }
      },
    },
  },
  configPriorities: [],
};

export default spaceTheme;

import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-knobs/register';

// @ts-ignore
import { ColorPicker } from '@storybook/addon-ondevice-knobs/dist/components/color-picker';
import Slider from '@react-native-community/slider';

ColorPicker.defaultProps = { sliderComponent: Slider };

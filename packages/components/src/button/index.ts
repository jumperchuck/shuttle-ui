import Button, { ButtonProps } from './Button';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';

export default Object.assign(Button, {
  Group: ButtonGroup,
});

export type { ButtonProps, ButtonGroupProps };

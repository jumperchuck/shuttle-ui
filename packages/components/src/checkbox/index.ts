import Checkbox, { CheckboxProps } from './Checkbox';
import CheckboxGroup, { CheckboxGroupProps } from './CheckboxGroup';

export default Object.assign(Checkbox, {
  Group: CheckboxGroup,
});

export type { CheckboxProps, CheckboxGroupProps };

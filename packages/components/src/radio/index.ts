import Radio, { RadioProps } from './Radio';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

export default Object.assign(Radio, {
  Group: RadioGroup,
});

export type { RadioProps, RadioGroupProps };

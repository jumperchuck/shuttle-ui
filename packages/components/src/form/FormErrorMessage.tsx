import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Text, TextProps } from '../text/Text';
import { useFieldContext } from './context';

export interface FormErrorMessageProps extends TextProps {}

export const FormError: ShuttleUIComponent<FormErrorMessageProps> = (props) => {
  const rest = useResolutionProps('FormError', props);

  const { field } = useFieldContext();

  const error = field?.errors.length ? field.errors[0] : null;

  if (!error) return null;

  return (
    <Text color="error" {...rest}>
      {error}
    </Text>
  );
};

export default withShuttleUI(FormError);

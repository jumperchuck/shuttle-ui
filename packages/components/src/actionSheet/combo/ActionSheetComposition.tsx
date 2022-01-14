import React from 'react';
import { renderNode } from '@shuttle-ui/utils';

import ActionSheet, { ActionSheetProps } from '../ActionSheet';
import ActionSheetContainer, { ActionSheetContainerProps } from '../ActionSheetContainer';
import ActionSheetItem, { ActionSheetItemProps } from '../ActionSheetItem';

export interface ActionSheetCompositionProps extends ActionSheetProps {
  containerProps?: ActionSheetContainerProps;
  items?: (ActionSheetItemProps | React.ReactNode)[];
}

const ActionSheetComposition = (props: ActionSheetCompositionProps) => {
  const { containerProps, items, ...actionSheetProps } = props;

  return (
    <ActionSheet {...actionSheetProps}>
      <ActionSheetContainer {...containerProps}>
        {items?.map((itemProps, index) =>
          renderNode(ActionSheetItem, itemProps, {
            key: index,
          }),
        )}
      </ActionSheetContainer>
    </ActionSheet>
  );
};

export default ActionSheetComposition;

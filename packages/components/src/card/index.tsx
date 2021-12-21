import Card, { CardProps } from './Card';
import CardTitle, { CardTitleProps } from './CardTitle';
import CardContent, { CardContentProps } from './CardContent';
import CardCover, { CardCoverProps } from './CardCover';

export default Object.assign(Card, {
  Title: CardTitle,
  Content: CardContent,
  Cover: CardCover,
});

export type { CardProps, CardTitleProps, CardContentProps, CardCoverProps };

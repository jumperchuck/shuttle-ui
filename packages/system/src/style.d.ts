import { TextStyle, ViewStyle } from 'react-native';
export declare type StyleValue = number | string | undefined | ViewStyle | TextStyle;
export declare type PropType = number | string | undefined;
export declare type Transform<T extends StyleValue = StyleValue> = (
  value: unknown,
  props: any,
  themeMapping: any,
) => T | undefined;
export declare type StyleOptions<T extends StyleValue = StyleValue> = {
  prop: string[];
  styleKey?: string | false;
  themeKey?: string;
  transform?: Transform<T>;
};
export interface StyleFunction<T extends StyleValue = StyleValue>
  extends StyleOptions<T> {
  (props: any): T | undefined;
  handlers?: Record<string, StyleFunction>;
}
export default function style<T = PropType>(options: StyleOptions<T>): StyleFunction<T>;

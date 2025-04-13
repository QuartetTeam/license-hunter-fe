import { SVGProps } from 'react';
import { Field } from './Field';

export type FieldIconsType = React.FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;

export type FieldIconsMap = Record<Field, FieldIconsType>;

import { SVGProps } from 'react';

type FieldIconsType = React.FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string | undefined;
    titleId?: string | undefined;
    desc?: string | undefined;
    descId?: string | undefined;
  }
>;

interface IFieldIcons {
  [key: string]: FieldIconsType;

  '경영·회계·사무': FieldIconsType;
  '전기·전자': FieldIconsType;
  '금융·보험': FieldIconsType;
  '법률·경찰·소방·교도·국방': FieldIconsType;
  '보건·의료': FieldIconsType;
  '사회복지·종교': FieldIconsType;
  '문화·예술·디자인·방송': FieldIconsType;
  '화학·바이오': FieldIconsType;
  영업판매: FieldIconsType;
  건설: FieldIconsType;
  기계: FieldIconsType;
}

export default IFieldIcons;

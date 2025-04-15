import { Field } from '@component/types/field.ts';

export const fieldNameToEnumMap: Record<string, Field> = {
  건설: Field.Construction,
  기계: Field.Machine,
  '비즈니스·사무': Field.Management,
  '에술·디자인·미디어': Field.ArtDesign,
  '전기·전자': Field.Electricity,
  화학: Field.ChemBio,
  '금융·보험': Field.Cash,
  '법률·경찰·소방·교도·국방': Field.Police,
  '보건·의료': Field.Doctor,
  '사회복지·종교': Field.SocialWelfare,
  영업판매: Field.BusinessSales,
};

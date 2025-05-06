import { Field } from './Field.ts';

export const fieldNameToEnumMap: Record<string, Field> = {
  건설: Field.Construction,
  기계: Field.Machine,
  '보건·의료': Field.Doctor,
  '비즈니스·사무': Field.Management,
  '산업안전·재해예방': Field.Safety,
  '예술·디자인·미디어': Field.ArtDesign,
  '전기·전자': Field.Electricity,
  화학: Field.ChemBio,
  IT: Field.IT,
  '금융·보험': Field.Cash,
};

import ConstructionIcon from '@icon/Field/icon-construction.svg?react';
import MachineIcon from '@icon/Field/icon-machine.svg?react';
import DoctorIcon from '@icon/Field/icon-doctor.svg?react';
import ManagementIcon from '@icon/Field/icon-management.svg?react';
import SafetyIcon from '@icon/Field/icon-safety.svg?react';
import ArtDesignIcon from '@icon/Field/icon-art-design.svg?react';
import ElectricityIcon from '@icon/Field/icon-electricity.svg?react';
import ChemBioIcon from '@icon/Field/icon-chem-bio.svg?react';
import ITIcon from '@icon/Field/icon-it.svg?react';
import CashIcon from '@icon/Field/icon-cash.svg?react';

import { FieldIconsMap } from '../types/fieldIcon.ts';
import { Field } from '../types/Field.ts';

export const fieldIconsMap: FieldIconsMap = {
  [Field.Construction]: ConstructionIcon,
  [Field.Machine]: MachineIcon,
  [Field.Doctor]: DoctorIcon,
  [Field.Management]: ManagementIcon,
  [Field.Safety]: SafetyIcon,
  [Field.ArtDesign]: ArtDesignIcon,
  [Field.Electricity]: ElectricityIcon,
  [Field.ChemBio]: ChemBioIcon,
  [Field.IT]: ITIcon,
  [Field.Cash]: CashIcon,
};

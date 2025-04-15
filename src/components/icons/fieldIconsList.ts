import ConstructionIcon from '@icon/Field/icon-construction.svg?react';
import MachineIcon from '@icon/Field/icon-machine.svg?react';
import ManagementIcon from '@icon/Field/icon-management.svg?react';
import ArtDesignIcon from '@icon/Field/icon-art-design.svg?react';
import ElectricityIcon from '@icon/Field/icon-electricity.svg?react';
import ChemBioIcon from '@icon/Field/icon-chem-bio.svg?react';
import CashIcon from '@icon/Field/icon-cash.svg?react';
import PoliceIcon from '@icon/Field/icon-police.svg?react';
import DoctorIcon from '@icon/Field/icon-doctor.svg?react';
import SocialWelfareIcon from '@icon/Field/icon-social-welfare.svg?react';
import BusinessSalesIcon from '@icon/Field/icon-business-sales.svg?react';

import { FieldIconsMap } from '../types/fieldIcon.ts';
import { Field } from '../types/field.ts';

export const fieldIconsMap: FieldIconsMap = {
  [Field.Construction]: ConstructionIcon,
  [Field.Machine]: MachineIcon,
  [Field.Management]: ManagementIcon,
  [Field.ArtDesign]: ArtDesignIcon,
  [Field.Electricity]: ElectricityIcon,
  [Field.ChemBio]: ChemBioIcon,
  [Field.Cash]: CashIcon,
  [Field.Police]: PoliceIcon,
  [Field.Doctor]: DoctorIcon,
  [Field.SocialWelfare]: SocialWelfareIcon,
  [Field.BusinessSales]: BusinessSalesIcon,
};

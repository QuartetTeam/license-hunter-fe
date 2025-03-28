import ManagementIcon from '@icon/Field/icon-management.svg?react';
import ElectricityIcon from '@icon/Field/icon-electricity.svg?react';
import CashIcon from '@icon/Field/icon-cash.svg?react';
import PoliceIcon from '@icon/Field/icon-police.svg?react';
import DoctorIcon from '@icon/Field/icon-doctor.svg?react';
import SocialWelfareIcon from '@icon/Field/icon-social-welfare.svg?react';
import ArtDesignIcon from '@icon/Field/icon-art-design.svg?react';
import ChemBioIcon from '@icon/Field/icon-chem-bio.svg?react';
import BusinessSalesIcon from '@icon/Field/icon-business-sales.svg?react';
import ConstructionIcon from '@icon/Field/icon-construction.svg?react';
import MachineIcon from '@icon/Field/icon-machine.svg?react';
import IFieldIcons from '../types/iconTypes.ts';

const iconList: IFieldIcons = {
    '경영·회계·사무': ManagementIcon,
    '전기·전자': ElectricityIcon,
    '금융·보험': CashIcon,
    '법률·경찰·소방·교도·국방': PoliceIcon,
    '보건·의료': DoctorIcon,
    '사회복지·종교': SocialWelfareIcon,
    '문화·예술·디자인·방송': ArtDesignIcon,
    '화학·바이오': ChemBioIcon,
    '영업판매': BusinessSalesIcon,
    '건설': ConstructionIcon,
    '기계': MachineIcon
};

export default iconList;


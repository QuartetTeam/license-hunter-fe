import type { Meta, StoryObj } from '@storybook/react';

import FieldButton from './FieldButton.tsx';

const meta = {
  title: 'Component/FavoriteFieldButton',
  component: FieldButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FieldButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const ManagementIcon: Story = {
  args: {
    fieldName: '경영·회계·사무',
  },
};

export const ElectricityIcon: Story = {
  args: {
    fieldName: '전기·전자',
  },
};

export const CashIcon: Story = {
  args: {
    fieldName: '금융·보험',
  },
};

export const PoliceIcon: Story = {
  args: {
    fieldName: '법률·경찰·소방·교도·국방',
  },
};

export const DoctorIcon: Story = {
  args: {
    fieldName: '보건·의료',
  },
};

export const SocialWelfareIcon: Story = {
  args: {
    fieldName: '사회복지·종교',
  },
};

export const ArtDesignIcon: Story = {
  args: {
    fieldName: '문화·예술·디자인·방송',
  },
};

export const ChemBioIcon: Story = {
  args: {
    fieldName: '화학·바이오',
  },
};

export const BusinessSalesIcon: Story = {
  args: {
    fieldName: '영업판매',
  },
};

export const ConstructionIcon: Story = {
  args: {
    fieldName: '건설',
  },
};

export const MachineIcon: Story = {
  args: {
    fieldName: '기계',
  },
};

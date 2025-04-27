import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '@component/types/Field.ts';
import FieldButton from './FieldButton.tsx';

const meta = {
  title: 'Component/FieldButton',
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
    fieldName: Field.Management,
  },
};

export const ElectricityIcon: Story = {
  args: {
    fieldName: Field.Electricity,
  },
};

export const CashIcon: Story = {
  args: {
    fieldName: Field.Cash,
  },
};

export const PoliceIcon: Story = {
  args: {
    fieldName: Field.Police,
  },
};

export const DoctorIcon: Story = {
  args: {
    fieldName: Field.Doctor,
  },
};

export const SocialWelfareIcon: Story = {
  args: {
    fieldName: Field.SocialWelfare,
  },
};

export const ArtDesignIcon: Story = {
  args: {
    fieldName: Field.ArtDesign,
  },
};

export const ChemBioIcon: Story = {
  args: {
    fieldName: Field.ChemBio,
  },
};

export const BusinessSalesIcon: Story = {
  args: {
    fieldName: Field.BusinessSales,
  },
};

export const ConstructionIcon: Story = {
  args: {
    fieldName: Field.Construction,
  },
};

export const MachineIcon: Story = {
  args: {
    fieldName: Field.Machine,
  },
};

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

export const DoctorIcon: Story = {
  args: {
    fieldName: Field.Doctor,
  },
};

export const ManagementIcon: Story = {
  args: {
    fieldName: Field.Management,
  },
};

export const SafetyIcon: Story = {
  args: {
    fieldName: Field.Safety,
  },
};

export const ArtDesignIcon: Story = {
  args: {
    fieldName: Field.ArtDesign,
  },
};

export const ElectricityIcon: Story = {
  args: {
    fieldName: Field.Electricity,
  },
};

export const ChemBioIcon: Story = {
  args: {
    fieldName: Field.ChemBio,
  },
};

export const ITIcon: Story = {
  args: {
    fieldName: Field.IT,
  },
};

export const CashIcon: Story = {
  args: {
    fieldName: Field.Cash,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import SearchBox from './SearchBox.tsx';

const meta = {
  title: 'Component/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBox>;
type Story = StoryObj<typeof meta>;

export default meta;

export const MainPage: Story = {
  args: {
    isTitle: true,
  },
};

export const CertificateSearch: Story = {
  args: {
    isTitle: false,
  },
};

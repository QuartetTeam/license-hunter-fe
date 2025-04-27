import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination.tsx';

const meta = {
  title: 'Component/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Pagination10: Story = {
  args: {
    certTotalPage: 10,
  },
};

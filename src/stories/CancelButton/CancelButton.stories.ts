import type { Meta, StoryObj } from '@storybook/react';

import CancelButton from './CancelButton.tsx';

const meta = {
  title: 'Component/CancelButton',
  component: CancelButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CancelButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cancel: Story = {
  args: {
    name: '취소',
    clickEvent: () => {
      console.log('Button clicked!');
    },
  },
};

export const Think: Story = {
  args: {
    name: '고민해볼게요.',
    clickEvent: () => {
      console.log('Button clicked!');
    },
  },
};

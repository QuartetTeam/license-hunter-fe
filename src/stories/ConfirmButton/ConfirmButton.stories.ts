import type { Meta, StoryObj } from '@storybook/react';

import ConfirmButton from './ConfirmButton.tsx';

const meta = {
  title: 'Component/ConfirmButton',
  component: ConfirmButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  args: {
    name: '확인',
    clickEvent: () => {
      console.log('Button clicked!');
    },
  },
};

export const Subscribe: Story = {
  args: {
    name: '네, 구독할게요!',
    clickEvent: () => {
      console.log('Button clicked!');
    },
  },
};

export const Add: Story = {
  args: {
    name: '네, 추가할게요!',
    clickEvent: () => {
      console.log('Button clicked!');
    },
  },
};

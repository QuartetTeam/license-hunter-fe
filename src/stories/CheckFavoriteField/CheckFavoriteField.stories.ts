import type { Meta, StoryObj } from '@storybook/react';

import CheckFavoriteField from './CheckFavoriteField.tsx';

const meta = {
  title: 'Component/CheckFavoriteField',
  component: CheckFavoriteField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckFavoriteField>;
type Story = StoryObj<typeof meta>;

export default meta;

export const MyPage: Story = {
  args: {
    favoriteFieldVisible: true,
    onVisibleFavoriteFieldClick: () => console.log('관심 분야 선택창 닫기'),
    alertConfirmMessage: '완료',
    alertCancelMessage: '취소',
  },
};

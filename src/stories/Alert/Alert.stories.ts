import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert.tsx';

const meta = {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;
type Story = StoryObj<typeof meta>;

export default meta;

export const MailingService: Story = {
  args: {
    alertVisible: true,
    onVisibleAlertClick: () => console.log('알림창 닫기'),
    alertTitle: '메일링 서비스',
    alertContent: '해당 자격증 관련 메일링 서비스를 받아보시겠어요?',
    alertConfirmMessage: '네, 구독할게요!',
    alertCancelMessage: '고민해볼게요.',
  },
};

export const AddCalendar: Story = {
  args: {
    alertVisible: true,
    onVisibleAlertClick: () => console.log('알림창 닫기'),
    alertTitle: '내 캘린더 추가',
    alertContent: '해당 자격증을 내 캘린더에 추가하시겠어요?',
    alertConfirmMessage: '네, 추가할게요!',
    alertCancelMessage: '고민해볼게요.',
  },
};

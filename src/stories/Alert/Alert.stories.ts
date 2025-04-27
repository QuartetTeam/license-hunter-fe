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
    clickEvent: () => console.log('메일링 서비스 구독'),
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
    clickEvent: () => console.log('내 캘린더 추가'),
  },
};

export const deleteUser: Story = {
  args: {
    alertVisible: true,
    onVisibleAlertClick: () => console.log('알림창 닫기'),
    alertTitle: '',
    alertContent:
      '콰르텟의 자격저격 서비스를 이용해주셔서 감사합니다. 좋은 서비스를 제공할 수 있도록 콰르텟 개발팀은 항상 노력하겠습니다.',
    alertConfirmMessage: '계정삭제',
    alertCancelMessage: '취소',
    clickEvent: () => console.log('계정 삭제'),
  },
};

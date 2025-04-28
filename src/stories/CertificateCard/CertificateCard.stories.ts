import type { Meta, StoryObj } from '@storybook/react';

import CertificateCard from './CertificateCard.tsx';

const meta = {
  title: 'Component/CertificateCard',
  component: CertificateCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CertificateCard>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Certificate: Story = {
  args: {
    data: [
      {
        id: 575,
        mainCategory: '경매·중개',
        subCategory: '유통·물류',
        name: '경매사(수산)',
        applicationDate: '2025-05-19T09:00:00Z',
        examDate: '2025-06-21T09:00:00Z',
        calendarSubscription: 0,
      },
    ],
    trashIconSelected: false,
    // requiredCalendar: true,
  },
};

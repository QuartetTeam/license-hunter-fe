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

export const RecommendCertificate: Story = {
  args: {
    mockData: [
      {
        certificateName: '정보처리기사',
        receiptDate: '2025-08-12',
        testDate: '2025-09-15',
        calenderCount: 342,
      },
    ],
    trashIconSelected: false,
    requiredCalender: false,
  },
};

export const CertificateSearch: Story = {
  args: {
    mockData: [
      {
        certificateName: '정보처리기사',
        receiptDate: '2025-08-12',
        testDate: '2025-09-15',
        calenderCount: 342,
      },
    ],
    trashIconSelected: false,
    requiredCalender: true,
  },
};

export const MyPage: Story = {
  args: {
    mockData: [
      {
        certificateName: '정보처리기사',
        receiptDate: '2025-08-12',
        testDate: '2025-09-15',
        calenderCount: 342,
      },
    ],
    trashIconSelected: true,
    requiredCalender: false,
  },
};

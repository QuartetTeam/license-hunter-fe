interface ICertificateData {
    id: string;
    name: string;
    applicationDate: string;
    examDate: string;
    CalendarSubscriptionCount: number;
}

interface ICertificateCardProps {
    data: ICertificateData[];
    trashIconSelected?: boolean;
    requiredCalender?: boolean;
}

export default ICertificateCardProps;
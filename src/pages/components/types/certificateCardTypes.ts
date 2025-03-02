interface ICertificateData {
    certificateName: string;
    receiptDate: string;
    testDate: string;
    calenderCount: number;
}

interface ICertificateCardProps {
    mockData: ICertificateData[];
    trashIconSelected?: boolean;
    requiredCalender?: boolean;
}

export default ICertificateCardProps;
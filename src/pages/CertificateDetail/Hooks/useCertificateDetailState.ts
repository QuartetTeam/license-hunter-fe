import { useState } from 'react';

const useCertificateDetailState = () => {
    // 메일링 서비스 알림창 ON/OFF 여부
    const [mailingAlertVisible, setMailingAlertVisible] = useState<boolean>(false);

    // 캘린더 알림창 ON/OFF 여부
    const [calenderAlertVisible, setCalenderAlertVisible] = useState<boolean>(false);

    // 메일링 서비스 알림창 열기/닫기
    const onVisibleMailingAlertClick = () => {
        setMailingAlertVisible(!mailingAlertVisible);
    };

    // 캘린더 알림창 열기/닫기
    const onVisibleCalenderAlertClick = () => {
        setCalenderAlertVisible(!calenderAlertVisible);
    };

    return {
        mailingAlertVisible,
        calenderAlertVisible,
        onVisibleMailingAlertClick,
        onVisibleCalenderAlertClick
    };
};

export default useCertificateDetailState;
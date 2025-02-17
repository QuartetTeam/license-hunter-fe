import { useState } from 'react';

const useMyPageState = () => {
    // '내 프로필' 메뉴 접기 여부
    const [myProfileVisible, setMyProfileVisible] = useState<boolean>(true);

    // '메일링 서비스 리스트' 메뉴 접기 여부
    const [mailingServiceVisible, setMailingServiceVisible] = useState<boolean>(true);

    // '계정 관리' 메뉴 접기 여부
    const [accountManageVisible, setAccountManageVisible] = useState<boolean>(true);

    // 메일링 서비스 휴지통 아이콘 선택 여부
    const [trashIconSelected, setTashIconSelected] = useState<boolean>(false);

    // '내 프로필' 메뉴 열기/닫기
    const onVisibleMyProfileClick = () => {
        setMyProfileVisible(!myProfileVisible);
    };

    // '메일링 서비스 리스트' 메뉴 열기/닫기
    const onVisibleMailingServiceClick = () => {
        setMailingServiceVisible(!mailingServiceVisible);
    };

    // '계정 관리' 메뉴 열기/닫기
    const onVisibleAccountManageClick = () => {
        setAccountManageVisible(!accountManageVisible);
    };

    // '메일링 서비스 리스트' 휴지통 아이콘 선택 시 체크박스 여부 결정
    const onTrashButtonClick = () => {
        setTashIconSelected(!trashIconSelected);
    };

    const scrollToSection = (elementId: string) => {
        document.getElementById(elementId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return {
        myProfileVisible,
        mailingServiceVisible,
        accountManageVisible,
        trashIconSelected,
        onVisibleMyProfileClick,
        onVisibleMailingServiceClick,
        onVisibleAccountManageClick,
        onTrashButtonClick,
        scrollToSection
    };
};

export default useMyPageState;
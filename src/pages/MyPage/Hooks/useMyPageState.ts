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

    // 메일링 서비스 일시 중단 Toggle ON/OFF 여부
    const [mailingServiceOn, setMailingServiceOn] = useState<boolean>(false);

    // 메뉴 선택 시 해당 메뉴로 스크롤 이동
    const scrollToSection = (elementId: string) => {
        document.getElementById(elementId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

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

    // 메일링 서비스 Toggle 버튼 ON/OFF
    const onMailingServiceClick = () => {
        setMailingServiceOn(!mailingServiceOn);
    };

    return {
        myProfileVisible,
        mailingServiceVisible,
        accountManageVisible,
        trashIconSelected,
        mailingServiceOn,
        scrollToSection,
        onVisibleMyProfileClick,
        onVisibleMailingServiceClick,
        onVisibleAccountManageClick,
        onTrashButtonClick,
        onMailingServiceClick
    };
};

export default useMyPageState;
import { useNavigate } from 'react-router-dom';

const useCommonState = () => {
    const navigate = useNavigate();

    // 'quartet' 버튼 클릭 시 '메인' 페이지로 이동
    const onHomeButtonClick = () => {
        window.scrollTo(0, 0);
        navigate('/');
    };

    // '내 캘린더' 버튼 클릭 시 '내 캘린더' 페이지로 이동
    const onMyCalenderButtonClick = () => {
        window.scrollTo(0, 0);
        navigate('/myCalender');
    };

    // '로그인' 버튼 클릭 시 '로그인' 페이지로 이동
    const onLoginButtonClick = () => {
        window.scrollTo(0, 0);
        navigate('/login');
    };

    // '마이페이지' 버튼 클릭 시 '마이페이지'로 이동
    const onMyPageButtonClick = () => {
        window.scrollTo(0, 0);
        navigate('/myPage');
    };

    return {
        onHomeButtonClick,
        onMyCalenderButtonClick,
        onLoginButtonClick,
        onMyPageButtonClick
    };
};

export default useCommonState;
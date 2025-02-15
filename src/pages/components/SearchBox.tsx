import { useNavigate } from 'react-router-dom';
import '@styles/pages/components/searchBox.scss';

const SearchBox = () => {
    const navigate = useNavigate();

    const onSearchButtonClick = () => {
        window.scrollTo(0, 0);
        navigate('/certificateSearch');
    };

    return (
        <div className="searchBox">
            <div className="searchBox-group" onClick={onSearchButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="searchBox-icon">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>

                <input className="searchBox-input" type="text" placeholder="직무 혹은 기업을 검색하세요."/>
                <button className="searchBox-submit" type="submit">검색</button>
            </div>
        </div>
    );
};

export default SearchBox;
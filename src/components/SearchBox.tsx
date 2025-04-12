import searchCertStore from '../common/store/cert/certStore.ts';
import useCertService from '../features/Certification/useCertService.ts';
import '@styles/pages/components/searchBox.scss';

const SearchBox = () => {

    const { onSearchClick, getSearchCert } = useCertService();
    const searchCert = getSearchCert?.data;

    // 검색 정보 set
    const { setSearchCertData } = searchCertStore();

    return (
        <div className="searchBox">
            <div className="searchBox-group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor" className="searchBox-icon">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>

                <input type="text" className="searchBox-input"
                       placeholder="직무 혹은 기업을 검색하세요."/>
                <button type="submit" className="searchBox-submit"
                        onClick={() => {
                            setSearchCertData(searchCert);
                            onSearchClick();
                        }}>검색
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
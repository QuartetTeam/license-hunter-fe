import Search from '@icon/icon-search.svg?react';
import searchCertStore from '../common/store/cert/certStore.ts';
import useCertService from '../features/Certification/useCertService.ts';
import './style/searchBox.scss';

const SearchBox = () => {
  const { onSearchClick, searchedCert } = useCertService();
  const searchCert = searchedCert?.data;

  // 검색 정보 set
  const { setSearchCertData } = searchCertStore();

  return (
    <div className="searchBox">
      <div className="searchBox-title">
        <div>필요한 자격증,</div>
        <div>깔끔하게 정리해서 보여드릴게요.</div>
      </div>
      <div className="searchBox-group">
        <Search className="searchBox-group__icon" />
        <input
          type="text"
          className="searchBox-group__input"
          placeholder="오늘은 어떤 자격증에 대해 알아볼까요?"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearchCertData(searchCert || []);
              onSearchClick();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;

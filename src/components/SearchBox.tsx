import Search from '@icon/icon-search.svg?react';
import { useCertService } from '@feature/Certification/useCertService.ts';
import { searchWordStore } from '@store/certification/certStore';
import './style/searchBox.scss';

const SearchBox = ({ isTitle }: { isTitle: boolean }) => {
  const { searchWord, setSearchWord } = searchWordStore();
  const { moveToCertByName } = useCertService();

  return (
    <div className="searchBox">
      {isTitle && (
        <div className="searchBox-title">
          <div>필요한 자격증,</div>
          <div>깔끔하게 정리해서 보여드릴게요.</div>
        </div>
      )}
      <div className="searchBox-group">
        <Search className="searchBox-group__icon" />
        <input
          type="text"
          className="searchBox-group__input"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="오늘은 어떤 자격증에 대해 알아볼까요?"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              moveToCertByName(searchWord);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;

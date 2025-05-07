import ArrowLeft from '@icon/icon-arrow-left.svg?react';
import ArrowRight from '@icon/icon-arrow-right.svg?react';
import { pageStore, searchedPageStore } from '@store/page/pageStore';
import './style/pagination.scss';

const Pagination = ({
  certTotalPage,
  isSearchMode,
}: {
  certTotalPage: number;
  isSearchMode: boolean;
}) => {
  const { page, setPage } = pageStore();
  const { searchedPage, setSearchedPage } = searchedPageStore();
  const currentPage = isSearchMode ? searchedPage : page;
  const setCurrentPage = isSearchMode ? setSearchedPage : setPage;

  const pageSize = 10;
  const pageArr = [];
  const firstPage = Math.floor(currentPage / pageSize) * pageSize;
  const lastPage = Math.min(firstPage + pageSize, certTotalPage);
  for (let index = firstPage; index < lastPage; index++) {
    pageArr.push(index);
  }

  const prevPage = (currentPage: number) => {
    const prev = Math.max(currentPage - 1, 0);
    setCurrentPage(prev);
  };

  const nextPage = (currentPage: number) => {
    const next = Math.min(currentPage + 1, certTotalPage - 1);
    setCurrentPage(next);
  };

  return (
    <div className="page">
      <ArrowLeft className="page-arrow-button" onClick={() => prevPage(currentPage)} />
      {pageArr.map((item, index) => (
        <div
          key={`page-${index}`}
          className={`page-number ${item === currentPage ? 'active' : ''}`}
          onClick={() => setCurrentPage(item)}
        >
          {item + 1}
        </div>
      ))}
      <ArrowRight className="page-arrow-button" onClick={() => nextPage(currentPage)} />
    </div>
  );
};

export default Pagination;

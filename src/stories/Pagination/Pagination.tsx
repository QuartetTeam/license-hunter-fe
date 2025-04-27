import ArrowLeft from '@icon/icon-arrow-left.svg?react';
import ArrowRight from '@icon/icon-arrow-right.svg?react';
import pageStore from '@store/page/pageStore';
import './pagination.scss';

const Pagination = ({ certTotalPage }: { certTotalPage: number }) => {
  const { page, setPage } = pageStore();
  const pageArr = [];
  for (let index = 0; index < certTotalPage; index++) {
    pageArr.push(index);
  }

  const prevPage = (page: number) => {
    const prev = Math.max(page - 1, 0);
    setPage(prev);
  };

  const nextPage = (page: number) => {
    const next = Math.min(page + 1, certTotalPage - 1);
    setPage(next);
  };

  return (
    <div className="page">
      <ArrowLeft className="page-arrow-button" onClick={() => prevPage(page)} />
      {pageArr.map((item, index) => (
        <div
          key={`page-${index}`}
          className={`page-number ${item === page ? 'active' : ''}`}
          onClick={() => setPage(item)}
        >
          {item + 1}
        </div>
      ))}
      <ArrowRight className="page-arrow-button" onClick={() => nextPage(page)} />
    </div>
  );
};

export default Pagination;

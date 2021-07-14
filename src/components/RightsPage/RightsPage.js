import './RightsPage.css';
import { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import apiServer from '../../utils/apiServer';
import Right from '../Right/Right';
import PaginationByPage from '../PaginationByPage/PaginationByPage';

const RightsPage = () => {
  const [rights, setRights] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  // пагинация
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  useEffect(() => {
    apiServer
      .getRights()
      .then((res) => {
        setRights(res.results);
        setPageCount(Math.ceil(res.count/16));
        setCurrentPage(1);
        setNextPage(res.next);
        setIsLoad(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoad(false);
      });
  }, []);

  function applyRightsFilter(filterList) {
    apiServer
      .getRightsWithParams(filterList)
      .then((res) => {
        setRights(res.results);
        setPageCount(Math.ceil(res.count/16));
        setCurrentPage(1);
        setNextPage(res.next);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function paginateNextRights() {
    apiServer.getPagination(nextPage).then((res) => {
      setRights(res.results);
      setNextPage(res.next);
      setPreviousPage(res.previous);
      setCurrentPage(currentPage + 1);
    });
  }

  function paginatePreviousRights() {
    apiServer.getPagination(previousPage).then((res) => {
      setRights(res.results);
      setNextPage(res.next);
      setPreviousPage(res.previous);
      setCurrentPage(currentPage - 1);
    });
  }

  return (
    <>
      <section className="content__header content__header_style_questions">
        <h1 className="title title_style_book">Права детей</h1>
        <Filter isLoad={isLoad} applyFilter={applyRightsFilter} />
      </section>

      <section className="guide-container guide-container_style_rights">
        <div className="guide-container__divisor"></div>
        <div className="guide-container__divisor"></div>
        <div className="guide-container__divisor"></div>
        {rights.map((right) => (
          <Right {...right} key={right.id} />
        ))}
      </section>
      {pageCount > 1 && (
        <PaginationByPage
          count={pageCount}
          applyNextPagination={paginateNextRights}
          currentPage={currentPage}
          applyPreviousPagination={paginatePreviousRights}
        />
      )}
    </>
  );
};

export default RightsPage;

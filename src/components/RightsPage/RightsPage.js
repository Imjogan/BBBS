import './RightsPage.css';
import { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import apiServer from '../../utils/apiServer';
import Right from '../Right/Right';
import PaginationByPage from '../PaginationByPage/PaginationByPage';

const RightsPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [rights, setRights] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  });

  // пагинация
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  useEffect(() => {
    apiServer
      .getRights()
      .then((res) => {
        console.log(res.results);
        setRights(res.results);
        setPageCount(Math.ceil(res.count / 2));
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
        console.log(res);
        setRights(res.results);
        setPageCount(Math.ceil(res.count / 2));
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
        {rights.length === 1 && (
          <div className="guide-container__divisor_hidden" />
        )}
        {((width > 1840 && rights.length > 4) ||
          (width > 1199 && width <= 1840 && rights.length > 3) ||
          (width > 639 && width <= 1199 && rights.length > 2) ||
          (width <= 639 && rights.length > 1)) && (
          <div className="guide-container__divisor" />
        )}
        {((width > 1840 && rights.length > 8) ||
          (width > 1199 && width <= 1840 && rights.length > 6) ||
          (width > 639 && width <= 1199 && rights.length > 4) ||
          (width <= 639 && rights.length > 2)) && (
          <div className="guide-container__divisor" />
        )}
        {((width > 1840 && rights.length > 12) ||
          (width > 1199 && width <= 1840 && rights.length > 9) ||
          (width > 639 && width <= 1199 && rights.length > 6) ||
          (width <= 639 && rights.length > 3)) && (
          <div className="guide-container__divisor" />
        )}
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

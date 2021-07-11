import './RightsPage.css';
import { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import apiServer from "../../utils/apiServer";
import Right from "../Right/Right";

const RightsPage = () => {
  const [rights, setRights] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    apiServer
    .getRights()
    .then((res) => {
      console.log(res.results);
      setRights(res.results);
      setIsLoad(true);
    })
    .catch((err) => {
      console.log(err);
      setIsLoad(false);
    });
  }, []);

  function applyRightsFilter(filterList) {
    apiServer.getRightsWithParams(filterList).then((res) => {
      // console.log(res);
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
        {/* <div className="guide-container__divisor"></div>
        <div className="guide-container__divisor"></div> */}
        {rights.map((right) => (
          <Right
            {...right}
            key={right.id}
          />
        ))}
      </section>
    </>
  );
};

export default RightsPage;

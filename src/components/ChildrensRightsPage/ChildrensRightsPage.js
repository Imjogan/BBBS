import './ChildrensRightsPage.css';
import { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';

const ChildrensRightsPage = ( {count = 5} ) => {
  const [isLoad, setIsLoad] = useState(false);


  function applyFilter(filterList) {
    // if (city !== 0)
    //   apiServer.getPlacesWithParams(city, filterList).then((res) => {
    //     setPlaces(res.results);
    //   });
  }

  return (
    <>
      <section className="content__header content__header_style_questions">
        <h1 className="title title_style_book">Права детей</h1>
        <Filter isLoad={isLoad} applyFilter={applyFilter} />
      </section>

      <section className="guide-container guide-container_style_rights">
        <div className="guide-container__divisor"></div>
        <div className="guide-container__divisor"></div>
        <div className="guide-container__divisor"></div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-yellow"
            >
              <h2 className="block-rights__title">
                Пенсионное обеспечение для детей-сирот
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-green form-circle"
            >
              <h2 className="block-rights__title">Льготы детей на жильё</h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-yellow form-semicircle"
            >
              <h2 className="block-rights__title">
                Трудоустройство для детей инвалидов
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-orange form-circle"
            >
              <h2 className="block-rights__title">
                Пенсионное обеспечение для детей-сирот
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-blue form-semicircle"
            >
              <h2 className="block-rights__title">
                Жилье для выпускников детских домов
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-orange"
            >
              <h2 className="block-rights__title">
                Трудоустройство для выпускников детских домов
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-green form-semicircle"
            >
              <h2 className="block-rights__title">
                Трудоустройство для детей инвалидов
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-yellow"
            >
              <h2 className="block-rights__title">Льготы детей на жильё</h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-green form-circle"
            >
              <h2 className="block-rights__title">
                Пенсионное обеспечение для детей-сирот
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-blue"
            >
              <h2 className="block-rights__title">Льготы детей на жильё</h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-orange form-circle"
            >
              <h2 className="block-rights__title">
                Трудоустройство для детей инвалидов
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-blue form-semicircle"
            >
              <h2 className="block-rights__title">
                Пенсионное обеспечение для детей-сирот
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-yellow form-circle"
            >
              <h2 className="block-rights__title">Льготы детей на жильё</h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-green form-semicircle"
            >
              <h2 className="block-rights__title">
                Пенсионное обеспечение для детей-сирот
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-yellow"
            >
              <h2 className="block-rights__title">Льготы детей на жильё</h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
        <div className="guide-container__card">
          <div className="block-rights">
            <a
              href="./rights_article.html"
              className="block-rights__wrapper background-orange form-semicircle"
            >
              <h2 className="block-rights__title">
                Пенсионное обеспечение для детей-сирот
              </h2>
              <p className="block-rights__category">рубрика</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildrensRightsPage;

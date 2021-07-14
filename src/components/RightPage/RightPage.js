import './RightPage.css';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiServer from '../../utils/apiServer';
import { colorArray, articleRightStyle } from '../../utils/constants';

const RightPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [right, setRight] = useState({});
  const currentStyle =
    articleRightStyle[Math.floor(Math.random() * articleRightStyle.length)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    apiServer
      .getRight(id)
      .then((res) => {
        console.log(res);
        setRight(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <section className="content-rights">
      <section
        className={`content__header content__header_style_rights-article content__header_variant_${currentStyle} ${
          colorArray[(right.id - 1) % colorArray.length]
        }`}
      >
        <div
          className={`content__pseudo-blocks content__pseudo-blocks_variant_${currentStyle} ${
            colorArray[(right.id - 1) % colorArray.length]
          }`}
        ></div>
        <div className="content__wrapper">
          <h1 className="title title_style_rights-article">{right.title}</h1>
          <p className="subtitle subtitle_style_rights-article">
            Развитие детей-сирот отличается от развития детей, живущих в семьях. Все
            этапы развития у детей-сирот проходят с искажениями и имеют ряд
            негативных особенностей: замедленный темп психического развития, низкий
            уровень интеллектуального развития, позднее формирование навыков
            саморегуляции и правил поведения, бедную эмоциональную сферу и
            воображение.
          </p>
        </div>
      </section>
      <section className="guide-article-description guide-article-description_style_rights-article guide-article-description_position_center">
        <div className="blocks-article">
          <h2 className="blocks-atricle__title blocks-atricle__title_style_guide-article">
            Отрицательный образ себя
          </h2>
          <p className="blocks-article__text">
            У таких детей возникает ощущение отверженности. Оно приводит к
            напряженности и недоверию к людям и, как итог, к реальному неприятию себя
            и окружающих. В ходе дальнейших взаимоотношений с окружающими негативное
            отношение к себе усиливается. Причиной формирования отрицательного образа
            себя, является также и недостаток безусловной любви, т. е. любви не за
            что-то, а просто, потому что он, ребенок, есть. И домашний ребенок может
            быть заброшен на няню, а в старшем возрасте безнадзорен.
          </p>
        </div>
        <div className="blocks-article">
          <h2 className="blocks-atricle__title blocks-atricle__title_style_guide-article">
            Особенности психофизического развития и эмоциональной сферы детей-сирот
          </h2>
          <ul className="blocks-article__list background-white">
            <li className="blocks-article__item">
              замедленное развитие познавательной деятельности (мало интересуются
              окружающим миром).
            </li>
            <li className="blocks-article__item">эмоциональная бедность.</li>
            <li className="blocks-article__item">
              отсутствует интерес к оценке взрослого.
            </li>
            <li className="blocks-article__item">
              отсутствует переживание неуспеха в деятельности. Нет потребности в
              положительной оценке взрослых и сверстников.
            </li>
            <li className="blocks-article__item">
              не умеют дифференцировать успешное и неуспешное действие.
            </li>
            <li className="blocks-article__item">отставание в развитии речи.</li>
            <li className="blocks-article__item">нарушения самоидентичности.</li>
            <li className="blocks-article__item">
              интеллектуальное развитие характеризуется дисгармоничностью,
              несбалансированностью видов мышления. Предметное и наглядное мышление у
              детей-сирот является главным: что видят, о том и думают.
            </li>
            <li className="blocks-article__item">
              вербальное (словесное) мышление достигает возрастной нормы к 6-и годам,
              а невербальное значительно отстает и формируется уже в школьном
              возрасте.
            </li>
          </ul>
        </div>
        <div className="blocks-article">
          <h2 className="blocks-atricle__title blocks-atricle__title_style_guide-article">
            Младший школьный возраст
          </h2>
          <p className="blocks-article__text">
            Для воспитанников младшего школьного возраста характерны ярко выраженные
            мотивы, непосредственно связанные с их повседневной деятельностью в
            детском доме: выполнением режима проживания в детском доме, правил
            поведения в детском доме и в школе, тогда как у семейных детей этой
            возрастной группы мотивы их деятельности и общения значительно богаче и
            разнообразнее. Такая ограниченность и бедность мотивационной сферы
            связаны с условиями проживания детей в детском доме и их недостаточно
            полным общением со взрослыми.
          </p>
        </div>
        <div className="blocks-article">
          <h2 className="blocks-atricle__title blocks-atricle__title_style_guide-article">
            Заголовок в одну строку
          </h2>
          <p
            className={`blocks-article__text blocks-article__text_type_accent ${
              colorArray[(right.id - 1) % colorArray.length]
            }`}
          >
            Для воспитанников младшего школьного возраста характерны ярко выраженные
            мотивы, непосредственно связанные с их повседневной деятельностью в
            детском доме: выполнением режима проживания в детском доме, правил
            поведения в детском доме и в школе, тогда как у семейных детей этой
            возрастной группы мотивы их деятельности и общения значительно богаче и
            разнообразнее. Такая ограниченность и бедность мотивационной сферы
            связаны с условиями проживания&nbsp;детей&nbsp;в&nbsp;детском доме и их
            недостаточно полным общением со взрослыми.
          </p>
        </div>
      </section>
      <section className="select-page select-page_style_rights-article">
        <div className="select-page__image select-page__image_style_rights-article form-circle background-green"></div>
        <a
          href="#"
          className="select-page__link select-page__link_style_guide-article"
        >
          Льготы детей на жилье
        </a>
        <button
          type="button"
          aria-label="next-page"
          className="button-next button-next_active"
        ></button>
      </section>
    </section>
  );
};

export default RightPage;

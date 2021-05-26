import { Link } from 'react-router-dom';
import CalendarBlock from './CalendarBlock';
import Article from './Article';
import ArticleBlock from './ArticleBlock';
import VideoCard from './VideoCard';
import Question from './Question';


const arr = [{}, {}, {}, {}] /* для того что бы карточки с видио отрендерились, строка 45 */
const arr2 = [{}, {}, {}, {}]  /* рендер вопросов стр 71 */


function Main(props) {
  return (
    <>
      <section className="two-columns two-columns_style_first">
        {props.isLoggedIn ? <CalendarBlock pageContent={props.pageContent} /> : <Article />}
        <Link to="#">
          <article className="block-photo">
            <h2 className="block-photo__title">История Марины и Алины</h2>
          </article>
        </Link>
      </section>
      <section className="two-columns two-columns_style_place ">
        <article className="block-place background-yellow">
          <p className="block-place__tag">выбор наставника</p>
          <h2 className="block-place__title">Сплав на байдарках в две строки</h2>
          <p className="block-place__caption">усадьба Архангельское в две строки</p>
          <div className="block-place__image"></div>
          <Link to="#" className="block-place__category">перейти на сайт</Link>
        </article>
        <article className="block-place_type_description background-white">
          <p className="block-place__caption">Девочка, 10 лет. Активный отдых</p>
          <p className="block-place__text">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился
          говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать
          друг друга, потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
          научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете
          не понимать друг друга, потом понимать чуть лучше и,
          Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово,
          а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько
          абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество
            вопросов, жизнь меняется.</p>
        </article>
      </section>
      <ArticleBlock className={'background-blue'} text="Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей. " />
      <section className='four-columns'>
        {arr.map(obj => (
          <VideoCard />
        ))}
      </section>
      <section className="two-columns two-columns_style_video-header">
        <article className="block-video-header block-video-header_type_description background-yellow">
          <h2 className="block-video-header__title">Эфир с выпускником нашей программы</h2>
          <p className="block-video-header__caption">Иван Рустаев, выпускник программы</p>
          <a href="#" className="block-video-header__category">смотреть видео</a>
        </article>
        <article className="block-video-header">
          <iframe className="block-video-header__iframe" />
        </article>
      </section>
      <section className='two-columns two-columns_style_questions'>
        <article className='block-links'>
          <iframe
            className='block-links__iframe'
            title='block-links__iframe'
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&amp;tabs=timeline&amp;width=420&amp;height=1000&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId'
            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          ></iframe>
        </article>
        <section className='three-columns'>
          {arr2.map(obj=>(
            <Question/>
            ))}
        </section>
      </section>
      <ArticleBlock className={'background-green'} text="У таких детей возникает ощущение отверженности. Оно приводит к напряженности и  недоверию к людям и, как итог, к реальному неприятию себя и окружающих." />;

    </>
  );
}

export default Main;

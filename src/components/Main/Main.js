import { Link } from 'react-router-dom';
import CalendarBlock from './CalendarBlock';
import Article from './Article';
import ArticleBlock from './ArticleBlock';
import VideoCard from './VideoCard';
import Question from './Question';




function Main(props) {
 

  const content = props.pageContent;
  
  return (
    <>
      <section className="two-columns two-columns_style_first">
        {props.isLoggedIn ? <CalendarBlock pageContent={content} /> : <Article />}
        <Link to="#" className="link">
          <article className="block-photo">
            <h2 className="block-photo__title">{content.history.title}</h2>
          </article>
        </Link>
      </section>
      <section className="two-columns two-columns_style_place ">
        <article className="block-place background-yellow">
          <p className="block-place__tag">выбор наставника</p>
          <h2 className="block-place__title">{content.place.title}</h2>
          <p className="block-place__caption">{content.place.name}</p>
          <div className="block-place__image"></div>
          <a href={content.place.link} className="block-place__category">перейти на сайт</a>
        </article>
        <article className="block-place_type_description background-white">
          <p className="block-place__caption">{content.place.info}</p>
          <p className="block-place__text">{content.place.description}</p>
        </article>
      </section>
      <ArticleBlock className={'background-blue'} text={content.articles[0].title} />
      <section className='four-columns'>
        {content.movies.map((movie, index) => (
          <VideoCard index={index} movies={movie}/>
        ))}
      </section>
      <section className="two-columns two-columns_style_video-header">
        <article className="block-video-header block-video-header_type_description background-yellow">
          <h2 className="block-video-header__title">{content.video.title}</h2>
          <p className="block-video-header__caption">{content.video.info}</p>
          <a href={content.video.link} className="block-video-header__category">смотреть видео</a>
        </article>
        <article className="block-video-header">
          <iframe className="block-video-header__iframe" title="This is a unique title"/>
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
          {content.questions.map(question=>(
            <Question question={question}/>
            ))}
        </section>
      </section>
      <ArticleBlock className={'background-green'} text={content.articles[1].title} />;

    </>
  );
}

export default Main;

function VideoCard(props) {

  const movie = props.movies
  return (
    <>
      <article className='block-video'>
        <iframe className='block-video__iframe'></iframe>
        <h2 className='block-video__title'>{movie.title}</h2>
        <p className='block-video__caption'>{movie.info}</p>
        <a href={movie.link} className='block-video__category'>
          смотреть трейлер
        </a>
        <div className='block-video__caption block-video__caption_type_overflow'>
          <a href='/#' className='block-video__category block-video__category_type_overflow-video'>
            {movie.tags[0].name}
          </a>
          <a href='/#' className='block-video__category block-video__category_type_overflow-video'>
          {movie.tags[1].name}
          </a>
        </div>
      </article>
    </>
  );
}

export default VideoCard;

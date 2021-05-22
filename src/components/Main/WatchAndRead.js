function WatchAndRead() {
  return (
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
  )
}

export default WatchAndRead;
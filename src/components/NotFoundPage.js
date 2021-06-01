import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__image"></div>
      <h1 className="not-found__title">404</h1>
      <p className="not-found__info">К сожалению, запрашиваемая страница не найдена. Попробуйте перейти на главную страницу</p>
      <Link  to="/main" type="button" className="not-found__button">Вернутся на главную</Link>
    </div>
  )
}

export default NotFoundPage;
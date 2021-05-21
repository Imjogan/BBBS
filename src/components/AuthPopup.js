function AuthPopup () {
  return (
    <div className="popup popup-sign-in">
        <div className="popup__container">
          <button type="button" aria-label="close popup" className="popup__close" />
          <h2 className="popup__title">Вход</h2>
          <p className="popup__message">Вход в личный кабинет доступен наставникам программы «Старшие Братья Старшие
            Сёстры».</p>
          <p className="popup__message">Пожалуйста, введите логин и пароль из письма. Если вам не приходило письмо,
            свяжитесь с вашим куратором.</p>
          <form action="#" name="sign-in" className="popup__form" method="POST">
            <label className="popup__field">
              <input id="login-input" required name="login" minLength={2} maxLength={40} placeholder="Логин" className="popup__input" type="text" />
              <span className="popup__input-error" />
            </label>
            <label className="popup__field">
              <input id="password-input" required name="password" minLength={2} maxLength={200} placeholder="Пароль" className="popup__input" type="password" />
              <span className="popup__input-error" />
            </label>
            <p className="popup__help">Забыли пароль?</p>
            <button aria-label="submit form" className="popup__button-submit" type="submit">Войти</button>
          </form>
        </div>
      </div>
  )
}

export default AuthPopup;
import "./AddPlacePopup.css";

function AddPlacePopup(props) {
  return (
    <div className={`popup popup-advice ${props.isOpen && "visible-block"}`}>
      <div className="popup__container popup__container_type_advice">
        <article className="block-message background-white block-message_type_margin">
          <p className="block-message__text block-message__text_type_advice-form">
            Если вы были в интересном месте и хотите порекомендовать его другим
            наставникам –
            <span className="block-message__accent">заполните форму</span>, и мы
            добавим вашу рекомендацию.
          </p>
        </article>
        <form
          action="#"
          name="sign-in"
          className="popup__form popup__form_type_advice"
          method="POST"
        >
          <label className="popup__field popup__field_type_advice">
            <input
              id="place-name"
              required
              name="login"
              minLength="2"
              maxLength="40"
              placeholder="Название*"
              className="popup__input popup__input_type_advice"
              type="text"
            />
            <span className="popup__input-error" />
          </label>
          <label
            className="
                  popup__field
                  popup__field_type_advice
                  popup__field_type_no-right-margin
                "
          >
            <input
              id="place-website"
              name="website"
              minLength="2"
              maxLength="200"
              placeholder="Сайт"
              className="popup__input popup__input_type_advice"
              type="url"
            />
            <span className="popup__input-error" />
          </label>
          <label
            className="
                  popup__field
                  popup__field_type_advice
                  popup__field_size_large
                  popup__field_type_no-right-margin
                "
          >
            <input
              id="place-address"
              required
              name="address"
              minLength="2"
              maxLength="40"
              placeholder="Адрес*"
              className="popup__input popup__input_type_advice"
              type="text"
            />
            <span className="popup__input-error" />
          </label>
          <label
            className="
                  popup__field
                  popup__field_type_advice
                  popup__field_size_small
                  popup__field_type_checkbox
                "
          >
            <input
              id="place-boy"
              required
              name="gender"
              className="
                    popup__input
                    popup__input_type_advice
                    popup__input_type_checkbox
                  "
              type="radio"
            />
            <span className="popup__visible-checkbox">Мальчик</span>
            <span className="popup__input-error" />
          </label>
          <label
            className="
                  popup__field
                  popup__field_type_advice
                  popup__field_size_small
                  popup__field_type_checkbox
                "
          >
            <input
              id="place-girl"
              required
              name="gender"
              className="
                    popup__input
                    popup__input_type_advice
                    popup__input_type_checkbox
                  "
              type="radio"
            />
            <span className="popup__visible-checkbox">Девочка</span>
            <span className="popup__input-error"></span>
          </label>
          <label
            className="
                  popup__field
                  popup__field_type_advice
                  popup__field_size_small
                  popup__field_type_no-right-margin
                "
          >
            <input
              id="place-age"
              required
              name="age"
              placeholder="Возраст*"
              className="popup__input popup__input_type_advice"
              type="number"
            />
            <span className="popup__input-error" />
          </label>
          <div
            className="
                  popup__field
                  popup__field_type_advice
                  popup__field_size_large
                  popup__field_type_no-right-margin
                "
          >
            <div className="popup__select">
              <input
                name="type-vacation"
                id="place-type-vacation"
                className="popup__select-input"
                type="hidden"
              />
              <div className="popup__select-head" >              Тип отдыха*</div>
              <ul className="popup__select-list display-none">
                <li className="popup__select-item">Активный</li>
                <li className="popup__select-item">Развлекательный</li>
                <li className="popup__select-item">Познавательный</li>
              </ul>

            </div>
          </div>
          <label
            className="
                  popup__field
                  popup__field_type_advice
                  popup__field_size_large
                  popup__field_type_no-right-margin
                "
          >
            <textarea
              className="popup__textarea"
              id="place-comment"
              name="main-text"
              placeholder="Комментарий* Поделитесь впечатлениями о проведенном времени"
              required
              minLength="5"
              maxLength="200"
            />
          </label>
          <label className="popup__field popup__field_type_add-photo">
            Добавить фото
            <input
              type="file"
              aria-label="add-photo"
              className="popup__button-add popup__button-add_type_add-photo"
            />
          </label>
          <button
            aria-label="submit-form"
            className="popup__button-submit popup__button-submit_type_advice"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddPlacePopup;

import "./AddPlacePopup.css";
import React from "react";

function AddPlacePopup(props) {
  const [visibleTypeVacation, setVisibleTypeVacation] = React.useState(false);
  const [valueSelectInput, setValueSelectInput] = React.useState("");
  const [isValidForm, setIsValidForm] = React.useState(false);
  const [showRequiredFields, setShowRequiredFields] = React.useState(false);
  const [checkedRadioInput, setCheckedRadioInput] = React.useState(false);

  function handleChangeValidity(e) {
    setIsValidForm(e.target.closest("form").checkValidity());
  }

  function handleSelect(e) {
    if (e.target.classList.contains("popup__select-item")) {
      setValueSelectInput(e.target.textContent);
      handleChangeValidity(e);
    }
  }

  function handleCloseSelect(e) {
    if (!e.target.classList.contains("popup__select-head")) {
      setVisibleTypeVacation(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.toggleAddPlacePopup();
    props.toggleSuccessPopup();
  }

  function handleChangeRadioInput(e) {
    setCheckedRadioInput(true);
    handleChangeValidity(e);
  }

  return (
    <div className={`popup popup-advice ${props.isOpen && "visible-block"}`}>
      <div
        onClick={handleCloseSelect}
        className="popup__container popup__container_type_advice"
      >
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
          onSubmit={handleSubmit}
        >
          <label className="popup__field popup__field_type_advice">
            <input
              onChange={handleChangeValidity}
              id="place-name"
              required
              name="login"
              minLength="2"
              maxLength="40"
              placeholder="Название*"
              className={` popup__input popup__input_type_advice ${
                showRequiredFields ? "popup__input_type_advice-error" : ""
              }`}
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
              onChange={handleChangeValidity}
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
              onChange={handleChangeValidity}
              id="place-address"
              required
              name="address"
              minLength="2"
              maxLength="40"
              placeholder="Адрес*"
              className={` popup__input popup__input_type_advice ${
                showRequiredFields ? "popup__input_type_advice-error" : ""
              }`}
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
              onChange={handleChangeRadioInput}
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
            <span
              className={` popup__visible-checkbox ${
                !checkedRadioInput && showRequiredFields
                  ? "popup__visible-checkbox_type_error"
                  : ""
              }`}
            >
              Мальчик
            </span>
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
              onChange={handleChangeRadioInput}
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
            <span
              className={` popup__visible-checkbox ${
                !checkedRadioInput && showRequiredFields
                  ? "popup__visible-checkbox_type_error"
                  : ""
              }`}
            >
              Девочка
            </span>
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
              onChange={handleChangeValidity}
              id="place-age"
              required
              name="age"
              placeholder="Возраст*"
              className={` popup__input popup__input_type_advice ${
                showRequiredFields ? "popup__input_type_advice-error" : ""
              }`}
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
            <div
              onClick={() => setVisibleTypeVacation(!visibleTypeVacation)}
              className={`popup__select ${
                visibleTypeVacation ? "popup__select_type_active" : ""
              }`}
            >
              <input
                name="type-vacation"
                id="place-type-vacation"
                className="popup__select-input"
                type="hidden"
                value={valueSelectInput}
              />
              <div
                className={` popup__select-head ${
                  visibleTypeVacation ? "popup__select-head_type_active" : ""
                } ${
                  valueSelectInput ? "popup__select-head_type_checked" : ""
                } ${showRequiredFields ? "popup__select-head_type_error" : ""}`}
              >
                {valueSelectInput || "Тип отдыха*"}
              </div>
              <ul
                onClick={handleSelect}
                className={`popup__select-list ${
                  visibleTypeVacation ? "" : "display-none"
                }`}
              >
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
              onChange={handleChangeValidity}
              className={`popup__textarea ${
                showRequiredFields ? "popup__textarea-error" : ""
              }`}
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
            onClick={() => setShowRequiredFields(true)}
            aria-label="submit-form"
            className={` popup__button-submit popup__button-submit_type_advice ${
              isValidForm && valueSelectInput
                ? "popup__button-submit_type_active"
                : ""
            }`}
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

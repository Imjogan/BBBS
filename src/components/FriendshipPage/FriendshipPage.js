import "./FriendshipPage.css";
import React from "react";
import api from "../../utils/api";
import Tag from "./Tag";

function FriendshipPage() {
  return (
    <main className="content page__content block-stories">
      <section className="content__header content__header_style_stories">
        <h1 className="title block-stories__title">Истории дружбы</h1>
        <blockquote className="block-stories__subtitle block-stories__subtitle_pos_header">
          Результат нашей работы сложно показать цифрами. Как измерить и
          взвесить дружбу? Как оценить успехи абсолютно разных детей? У каждой
          пары — свой результат и свои достижения. Именно об этом мы
          рассказываем в историях.
        </blockquote>
        <section className="menu block-stories__menu menu_type_stories">
          <div className="menu__pseudo-block"></div>
          <ul className="menu__list menu__list_style_stories">
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_active menu__button_wide menu__button_style"
              >
                Алина и Марина
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Кирилл и Никита
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Алик и Артём
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Нина и Виталик
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Юля и Вова
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Катя и Петя
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Вероника и Виталик
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Катя и Петя
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Вероника и Виталик
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Катя и Петя
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Вероника и Виталик
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_wide menu__button_style"
              >
                Алик и Артём
              </button>
            </li>
          </ul>
          <div className="menu__arrow"></div>
        </section>
      </section>

      <section className="content__stories">
        <div className="block-stories__photo block-stories__photo_pos">
          <a id="story_1"></a>
        </div>
        <h2 className="block-stories__crosshead">Алина и Марина</h2>
        <span className="block-stories__caption">
          Вместе с февраля 2013 года
        </span>
        <blockquote className="block-stories__subtitle block-stories__subtitle_pos_article">
          Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012
          году, а в первые месяцы 2013-го после всех тестов и тренингов у меня
          появился младший – Никита. Надо сказать, что шёл я к этому довольно
          долго два или три года. Нет, не потому что собирался с мыслями. Я
          совершенно чётко осознавал, что накопил достаточный эмоциональный
          бэкграунд и готов делиться им с детьми, а точнее – с каким-то одним
          ребёнком.
        </blockquote>
        <p className="block-stories__text">
          Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012
          году, а в первые месяцы 2013-го после всех тестов и тренингов у меня
          появился младший — Никита. Надо сказать, что шёл я к этому довольно
          долго два или три года. Нет, не потому что собирался с мыслями. Я
          совершенно чётко осознавал, что накопил достаточный эмоциональный
          бэкграунд и готов делиться им с детьми, а точнее — с каким-то одним
          ребёнком. Но большинство некоммерческих организаций, которые работают
          с сиротами, практикуют массовые выезды волонтёров к группам детей, а
          мне хотелось найти программу, где организуют индивидуальное общение
          взрослого и ребёнка, поскольку я понимал, что дети в интернатах
          гораздо больше нуждаются во внимании и индивидуальном общении, чем в
          подарках. На поиски подходящей программы ушло некоторое время, и вдруг
          в конце 2012 года общество сильно всколыхнулось после принятия «закона
          Димы Яковлева», все волонтёрские программы стали очень активны в
          Интернете, в том числе и «Старшие братья Старшие сёстры». Прочитав
          первую страницу на сайте «Старших братьев…», я понял: вот оно! И сразу
          заполнил заявку на участие в программе.
        </p>
      </section>

      <section className="block-stories__crossline">
        <div className="block-stories__horisont-line"></div>
        <p className="block-stories__crosshead block-stories__crosshead_pos_margin_top_bottom">
          Первые месяцы дружбы с Никитой были непростыми – мы привыкали друг к
          другу. Никита не верил, что я надолго в его жизни
        </p>
        <div className="block-stories__horisont-line"></div>
      </section>

      <section className="block-stories__photo-grid">
        <div className="block-stories__photo-grid-item"></div>
        <div className="menu__arrow block-stories__arrow block-stories__arrow_direction_left"></div>
        <div className="block-stories__photo-grid-item"></div>
        <div className="menu__arrow block-stories__arrow"></div>
        <div className="block-stories__photo-grid-item"></div>
      </section>

      <section className="content__stories block-stories__article">
        <div className="content__wrapper content__wrapper_style_stories">
          <p className="block-stories__text block_stories__text_margins">
            Переломить эту ситуацию помогли каникулы. Когда я впервые провожал
            его в зимний лагерь, он сказал, что не хочет уезжать, потому что,
            когда он вернётся, меня уже не будет рядом. Убеждения и заверения в
            том, что я никуда не денусь, не помогли, и даже то, что после
            каникул я пришёл, не добавило Никите уверенности в долгосрочности
            нашей дружбы. Ситуация повторилась летом: уезжая в лагерь, он снова
            боялся, что наша дружба кончится, но я снова встретил его осенью. И
            тогда Никита понял, что я в его жизни надолго и всерьёз, и стал
            доверять мне. Например, я могу позвонить и сказать, что на этих
            выходных у меня не получится приехать, и он совершенно спокойно
            спрашивает, приду ли я на следующих.
          </p>
          <p className="block-stories__text block_stories__text_margins">
            Сейчас всё хорошо, и я очень рад нашим встречам и общению.
            Вдохновляет то, что Никита начал больше рассказывать о своей жизни и
            друзьях, стал более открытым и чутким. Он даже запомнил дату нашей
            первой встречи, понимая, что это важная дата для нас обоих. Мы
            назвали эту дату днём рождения нашей пары, и, когда нам исполнилось
            три года, он всем в группе рассказывал о нашем дне рождения и
            приглашал на торт.
          </p>
          <p className="block-stories__text block_stories__text_margins">
            Ещё одна радость — он учится рассуждать, понимать свои потребности и
            выбирать то, что ему больше нравится. Для стороннего наблюдателя это
            кажется неочевидным достижением, но, если знать, как неохотно
            воспитанники сиротских учреждений включают голову, особенно в
            ситуации выбора, то всё станет ясно. Тем не менее мне порой
            приходится прилагать некоторые усилия к тому, чтобы он
            аргументировал свой выбор. Например, когда я спрашиваю: «Куда мы
            пойдем: в парк Горького или в кино?» — он какое-то время пытается
            угадать «правильный ответ», но, когда видит, что со мной этот номер
            не проходит, начинает объяснять, почему сделал тот или иной выбор.
          </p>
          <p className="block-stories__text block_stories__text_margins">
            Переломить эту ситуацию помогли каникулы. Когда я впервые провожал
            его в зимний лагерь, он сказал, что не хочет уезжать, потому что,
            когда он вернётся, меня уже не будет рядом. Убеждения и заверения в
            том, что я никуда не денусь, не помогли, и даже то, что после
            каникул я пришёл, не добавило Никите уверенности в долгосрочности
            нашей дружбы. Ситуация повторилась летом: уезжая в лагерь, он снова
            боялся, что наша дружба кончится, но я снова встретил его осенью. И
            тогда Никита понял, что я в его жизни надолго и всерьёз, и стал
            доверять мне. Например, я могу позвонить и сказать, что на этих
            выходных у меня не получится приехать, и он совершенно спокойно
            спрашивает, приду ли я на следующих.
          </p>
          <a className="block-stories__tag-button" href="#">
            написать Алине
          </a>
        </div>
      </section>

      <section className="content__stories">
        <div className="block-stories__photo block-stories__photo_pos">
          <a id="story_2"></a>
        </div>
        <h2 className="block-stories__crosshead">Кирилл и Никита</h2>
        <span className="block-stories__caption">
          Вместе с февраля 2013 года
        </span>
        <blockquote className="block-stories__subtitle block-stories__subtitle_pos_article">
          Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012
          году, а в первые месяцы 2013-го после всех тестов и тренингов у меня
          появился младший – Никита. Надо сказать, что шёл я к этому довольно
          долго два или три года. Нет, не потому что собирался с мыслями. Я
          совершенно чётко осознавал, что накопил достаточный эмоциональный
          бэкграунд и готов делиться им с детьми, а точнее – с каким-то одним
          ребёнком.
        </blockquote>
        <p className="block-stories__text">
          Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012
          году, а в первые месяцы 2013-го после всех тестов и тренингов у меня
          появился младший — Никита. Надо сказать, что шёл я к этому довольно
          долго два или три года. Нет, не потому что собирался с мыслями. Я
          совершенно чётко осознавал, что накопил достаточный эмоциональный
          бэкграунд и готов делиться им с детьми, а точнее — с каким-то одним
          ребёнком. Но большинство некоммерческих организаций, которые работают
          с сиротами, практикуют массовые выезды волонтёров к группам детей, а
          мне хотелось найти программу, где организуют индивидуальное общение
          взрослого и ребёнка, поскольку я понимал, что дети в интернатах
          гораздо больше нуждаются во внимании и индивидуальном общении, чем в
          подарках. На поиски подходящей программы ушло некоторое время, и вдруг
          в конце 2012 года общество сильно всколыхнулось после принятия «закона
          Димы Яковлева», все волонтёрские программы стали очень активны в
          Интернете, в том числе и «Старшие братья Старшие сёстры». Прочитав
          первую страницу на сайте «Старших братьев…», я понял: вот оно! И сразу
          заполнил заявку на участие в программе.
        </p>
      </section>
    </main>
  );
}

export default FriendshipPage;

import React from 'react';
import ContentMenuSection from '../ContentMenuSection/ContentMenuSection';
import ContentMenuCardGuide from '../ContentMenuCardGuide/ContentMenuCardGuide';
import ContentMenuCardVideo from '../ContentMenuCardVideo/ContentMenuCardVideo';
import guideImage from '../../images/block-guide-photo.jpg';
import ContentMenuCardArticle from '../ContentMenuCardArticle/ContentMenuCardArticle';
import ContentMenuCardMovie from '../ContentMenuCardMovie/ContentMenuCardMovie';
import ContentMenuCardBook from '../ContentMenuCardBook/ContentMenuCardBook';
import './ContentMenuPage.css';

const arrTest = [
  { title: "Психологические особенности детей-сирот", link: guideImage },
  { title: "Социальная адаптация", link: guideImage },
  { title: "Особенности социально дезадаптивных детей", link: guideImage },
  { title: "Психологические особенности детей-сирот", link: guideImage },
  { title: "Психологические особенности детей-сирот", link: guideImage }
];

const formGuide = [ "", "","circle","semicircle"];

export default function ContentMenuPage() {
    let countFormGuide = 0;
    return (
        <>
        <ContentMenuSection
        title="Справочник"
        >
            {arrTest.map(card=> { 
                if (countFormGuide > 2) { countFormGuide = 1 }
                else { countFormGuide+= 1; }
                return (
            <ContentMenuCardGuide
            title={card.title}
            link={card.link}
            form={formGuide[countFormGuide]}
            /> ) }
            )}
           
        </ContentMenuSection>
                <ContentMenuSection
        title="Видео"
        >
            <ContentMenuCardVideo
            title="Меняется смысл – меняется жизнь"
            caption="Прямой эфир с актрисой театра и кино Эмилией Спивак"
            link={guideImage}
            />
        </ContentMenuSection>
                <ContentMenuSection
        title="Статьи">
            <ContentMenuCardArticle
            title="Причины подростковой агрессии"
            caption="Ирина Стасенко, педагог-психолог"
            text1="Аннотация книги, статьи, фильма в несколько абзацев. В тот
            момент, как ребёнок научился говорить, и не одно слово,
            а задавать бесконечное количество вопросов, жизнь меняется.
            Вы будете не понимать друг друга, потом понимать чуть лучше
            и, в конце концов, научитесь даже шутить. В тот момент, как
            ребёнок научился говорить, и не одно слово, а задавать
            бесконечное количество вопросов, жизнь меняется. Аннотация
            статьи в несколько абзацев. Аннотация статьи в несколько
            абзацев. В тот момент, как ребёнок научился говорить,
            и не одно слово, а задавать бесконечное количество вопросов,
            жизнь меняется. Вы будете не понимать друг друга, потом
            понимать чуть лучше и, в конце концов, научитесь даже
            шутить. Аннотация статьи в несколько абзацев."
            text2="Аннотация статьи в несколько абзацев. В тот момент, как
            ребёнок научился говорить, и не одно слово, а задавать
            бесконечное количество вопросов, жизнь меняется. Вы будете
            не по Аннотация статьи в несколько абзацев. В тот момент,
            как ребёнок научился говорить, и не одно слово, а задавать
            бесконечное количество вопросов, жизнь меняется."
            />
        </ContentMenuSection>
                <ContentMenuSection
        title="Фильмы">
            <ContentMenuCardMovie
                title="Жутко громко и запредельно близко"
                caption="Василий Сигарев, Борисов-Мусотов (Россия), 2009 год"
                link={guideImage}
            />
        </ContentMenuSection>
                <ContentMenuSection
        title="Книги">
            <ContentMenuCardBook
            title="Жизнь после утраты"
            author="Волкан Вамик, Зинтл Элизабет"
            year="2011 год"
            text1="Аннотация книги, статьи, фильма в несколько абзацев. В тот
            момент, как ребёнок научился говорить, и не одно слово,
            а задавать бесконечное количество вопросов, жизнь меняется.
            Вы будете не понимать друг друга, потом понимать чуть лучше
            и, в конце концов, научитесь даже шутить. В тот момент, как
            ребёнок научился говорить, и не одно слово, а задавать
            бесконечное количество вопросов, жизнь меняется. Аннотация
            статьи в несколько абзацев. Аннотация статьи в несколько
            абзацев. В тот момент, как ребёнок научился говорить,
            и не одно слово, а задавать бесконечное количество вопросов,
            жизнь меняется. Вы будете не понимать друг друга, потом
            понимать чуть лучше и, в конце концов, научитесь даже
            шутить. Аннотация статьи в несколько абзацев."
            text2="Аннотация статьи в несколько абзацев. В тот момент, как
            ребёнок научился говорить, и не одно слово, а задавать
            бесконечное количество вопросов, жизнь меняется. Вы будете
            не по Аннотация статьи в несколько абзацев. В тот момент,
            как ребёнок научился говорить, и не одно слово, а задавать
            бесконечное количество вопросов, жизнь меняется."
            />
        </ContentMenuSection>
        </>
    )
}
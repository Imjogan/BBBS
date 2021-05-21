import ArticleBlue from './ArticleBlue';
// import Article from './Article';
import Questions from './Questions';
import VideoCards from './VideoCards';
import ArticleGreen from './ArticleGreen';
import GreetingInfo from './GreetingInfo';
import MentorChoice from './MentorChoice';

function Main() {
  return (
    <main class='content page__content'>
      <GreetingInfo />
      <MentorChoice />
      <ArticleBlue />
      <VideoCards />
      <Questions />
      <ArticleGreen />
    </main>
  );
}

export default Main;

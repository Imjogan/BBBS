import ArticleBlue from './ArticleBlue';
// import Article from './Article';
import Questions from './Questions';
import VideoCards from './VideoCards';
import ArticleGreen from './ArticleGreen';
import GreetingInfo from './GreetingInfo';
import MentorChoice from './MentorChoice';
import WatchAndRead from './WatchAndRead';

function Main() {
  return (
    <main class='content page__content'>
      <GreetingInfo />
      <MentorChoice />
      <ArticleBlue />
      <VideoCards />
      <WatchAndRead />
      <Questions />
      <ArticleGreen />
    </main>
  );
}

export default Main;

import ArticleBlue from './ArticleBlue';
// import Article from './Article';
import Questions from './Questions';
import VideoCards from './VideoCards';
import ArticleGreen from './ArticleGreen';
import GreetingInfo from './GreetingInfo';
import MentorChoice from './MentorChoice';
import WatchAndRead from './WatchAndRead';

function Main(props) {
  return (
    <>
      <GreetingInfo isLoggedIn={props.isLoggedIn}/>
      <MentorChoice />
      <ArticleBlue />
      <VideoCards />
      <WatchAndRead />
      <Questions />
      <ArticleGreen />
    </>
  );
}

export default Main;

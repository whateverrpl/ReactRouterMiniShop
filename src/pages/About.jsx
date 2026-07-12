import AboutCheckOut from "../components/about/AboutCheckOut";
import AboutCode from "../components/about/AboutCode";
import AboutImages from "../components/about/AboutImages";
import AboutLists from "../components/about/AboutLists";
import AboutParagraphs from "../components/about/AboutParagraphs";
import AboutQuotes from "../components/about/AboutQuotes";
import AboutTitles from "../components/about/AboutTitles";

function About() {
  return (
    <div className="prose">
      <AboutTitles />
      <AboutParagraphs />
      <AboutLists />
      <AboutQuotes />
      <AboutCode />
      <AboutCheckOut />
      <AboutImages />
    </div>
  );
}

export default About;

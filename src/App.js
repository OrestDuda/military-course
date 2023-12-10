import "./App.scss";
import { Header } from "./components/Header/Header";
import { Timer } from "./components/Timer/Timer";
import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { SuitableFor } from "./components/SuitableFor/SuitableFor";
import { CourseDescription } from "./components/CourseDescription/CourseDescription";
import { MoreAboutCourse } from "./components/MoreAboutCourse/MoreAboutCourse";
import { CourseProgram } from "./components/CourseProgram/CourseProgram";
import { ResultsAfterCourse } from "./components/ResultsAfterCourse/ResultsAfterCourse";
import { AboutAuthor } from "./components/AboutAuthor/AboutAuthor";
import { Certificates } from "./components/Certificates/Certificates";
import { FaceBookPost } from "./components/FaceBookPost/FaceBookPost";
import { FAQHeader } from "./components/FAQHeader/FAQHeader";
import { FAQ } from "./components/FAQ/FAQ";
import { CountdownFooter } from "./components/CountdownFooter/CountdownFooter";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutCourse />
      <SuitableFor />
      <CourseDescription />
      <MoreAboutCourse />
      <CourseProgram />
      <ResultsAfterCourse />
      <AboutAuthor />
      <Certificates />
      <FaceBookPost />
      <FAQHeader />
      <FAQ />
      <CountdownFooter />
      <Footer />
      <Timer />
    </div>
  );
}

export default App;

import "./App.scss";
import { Header } from "./components/Header/Header";
import { Timer } from "./components/Timer/Timer";
import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { SuitableFor } from "./components/SuitableFor/SuitableFor";
import { CourseDescription } from "./components/CourseDescription/CourseDescription";
import { MoreAboutCourse } from "./components/MoreAboutCourse/MoreAboutCourse";
import { CourseProgram } from "./components/CourseProgram/CourseProgram";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutCourse />
      <SuitableFor />
      <CourseDescription />
      <MoreAboutCourse />
      <CourseProgram />
      <Timer />
    </div>
  );
}

export default App;

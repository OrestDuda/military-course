import "./App.scss";
import { Header } from "./components/Header/Header";
import { Timer } from "./components/Timer/Timer";
import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { SuitableFor } from "./components/SuitableFor/SuitableFor";
import { CourseDescription } from "./components/CourseDescription/CourseDescription";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutCourse />
      <SuitableFor />
      <CourseDescription />
      <Timer />
    </div>
  );
}

export default App;

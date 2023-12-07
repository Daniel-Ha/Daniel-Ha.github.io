import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import './index.css';

function App() {
  return (
    <div className="main-content z-60">
      {/* Routing logic */}
      <Routes>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<About />} />
      </Routes>
      
  </div>
  );
}

export default App;

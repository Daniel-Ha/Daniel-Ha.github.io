import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
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

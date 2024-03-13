import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import './index.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="main-content z-60">
      <HashRouter>
        <div className="bg-white dark:bg-slate-500 min-h-screen">
          <Navbar/>
          <Routes>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<About />} />
      </Routes>
        </div>
      </HashRouter>
  </div>
  );
}

export default App;

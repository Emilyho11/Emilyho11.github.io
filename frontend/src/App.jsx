import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Hobbies from './pages/Hobbies.jsx'
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import Stars from './components/Stars.jsx';
import Experience from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
      <Stars />
      <HashRouter>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/experience/:id" element={<Experience />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  )
}

export default App

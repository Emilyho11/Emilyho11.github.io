import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Hobbies from './pages/Hobbies.jsx'
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import Stars from './components/Stars.jsx';

function App() {

  return (
    <>
      <Stars />
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  )
}

export default App

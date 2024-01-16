import './App.css';
import Navbar from './components/Navbar';
import Signin from './pages/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Signin />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

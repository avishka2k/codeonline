import './App.css';
import Navbar from './components/Navbar';
import Signin from './pages/Signin';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivateRoute from './utils/PrivateRoute';
function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home />} exact/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

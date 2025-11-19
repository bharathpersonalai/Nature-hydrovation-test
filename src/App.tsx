import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Technology from './pages/Technology';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop"; 
import PopupBanner from "./components/PopupBanner";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      {/* <-- 2. ADD THIS LINE HERE */}
      <PopupBanner />
      <div className="min-h-screen bg-white"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

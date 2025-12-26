import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Web from './pages/Web';
import Mobile from './pages/Mobile';
import Social from './pages/Social';
import Software from './pages/Software';
import Erp from './pages/Erp';
import Creative from './pages/Creative';
import Hardware from './pages/Hardware';
import Clientele from './pages/Clientele';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loader on page change
    setIsLoading(true);

    // Smooth transition delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second for a premium feel

    // Scroll to top on every route change
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <Loader />}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web" element={<Web />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/social" element={<Social />} />
          <Route path="/software" element={<Software />} />
          <Route path="/erp" element={<Erp />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/clientele" element={<Clientele />} />
          {/* Add other routes here as we create the pages */}
          <Route path="*" element={<Home />} /> {/* Fallback to Home for now */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;

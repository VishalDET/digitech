import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;

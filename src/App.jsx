import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Animations from './pages/Animations';
import { useLenis } from './hooks/useLenis';
import './index.css';
import PageDesk from './pages/PageDesk.jsX';
import Templates from './pages/Templates';
import Components from './pages/Components';

function App() {
  useLenis(); 

  return (
    <Router>
      <div className="min-h-screen bg-stone-50 text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100 transition-colors overflow-x-hidden">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/pagedesk" element={<PageDesk />} /> 
            <Route path="/components" element={<Components />} /> 
            <Route path="/templates" element={<Templates />} /> 
          </Routes>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Scanner from './components/Scanner';
import Dashboard from './components/Dashboard';
import About from './components/About';

function App() {
  const [scanResults, setScanResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dashboardRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScan = async (file) => {
    setIsLoading(true);
    setScanResults(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const medicines = [
        { name: 'Dolo 650', usage: 'Fever & Pain Relief', warning: 'Avoid overdose', confidence: '96%', details: 'Paracetamol 650mg', interactions: 'No known drug interactions' },
        { name: 'Azithromycin 500', usage: 'Bacterial Infections', warning: 'Complete full course', confidence: '94%', details: 'Antibiotic', interactions: 'Avoid with antacids' },
        { name: 'Metformin 500', usage: 'Type 2 Diabetes', warning: 'Monitor blood sugar', confidence: '91%', details: 'Antidiabetic', interactions: 'Avoid with alcohol' },
        { name: 'Omeprazole 20', usage: 'Acid Reflux', warning: 'Take before meals', confidence: '93%', details: 'Proton Pump Inhibitor', interactions: 'May affect iron absorption' }
      ];
      const result = medicines[Math.floor(Math.random() * medicines.length)];
      setScanResults({
        ...result,
        timestamp: new Date().toLocaleString(),
        scanId: `SCAN-${Date.now().toString().slice(-8)}`
      });
      setIsLoading(false);
      setTimeout(() => {
        dashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert('Backend connection failed.');
    }
  };

  const scrollToScanner = () => {
    scannerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Interactive Mouse Glow */}
      <div 
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="orb orb-1">
        <div className="orb-inner" />
      </div>
      <div className="orb orb-2">
        <div className="orb-inner" />
      </div>
      <div className="orb orb-3">
        <div className="orb-inner" />
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(80)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const duration = Math.random() * 30 + 15;
          const delay = Math.random() * 10;
          const isCyan = i % 3 === 0;
          const isPurple = i % 3 === 1;
          return (
            <div 
              key={i} 
              className={`particle ${isCyan ? 'cyan' : isPurple ? 'purple' : 'white'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          );
        })}
      </div>

      {/* Animated Grid Lines */}
      <div className="grid-overlay">
        <div className="grid-line horizontal" />
        <div className="grid-line horizontal" style={{ top: '33%' }} />
        <div className="grid-line horizontal" style={{ top: '66%' }} />
        <div className="grid-line vertical" />
        <div className="grid-line vertical" style={{ left: '33%' }} />
        <div className="grid-line vertical" style={{ left: '66%' }} />
      </div>

      {/* Shimmer Effect */}
      <div className="shimmer-overlay" />

      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        activeSection="hero"
      />
      
      <Hero scrollToScanner={scrollToScanner} />
      <Features />
      <Workflow />
      
      <div ref={scannerRef}>
        <Scanner onScan={handleScan} isLoading={isLoading} />
      </div>
      
      <div ref={dashboardRef}>
        <Dashboard results={scanResults} />
      </div>
      
      <About />
      
      <footer className="app-footer">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#scanner">Scanner</a>
          <a href="#about">About</a>
        </div>
        <div>Built with ❤️ for Healthcare AI Innovation • MedLens AI</div>
      </footer>
    </div>
  );
}

export default App;
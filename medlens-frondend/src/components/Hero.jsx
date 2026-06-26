import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldHeart, 
  FaMagnifyingGlass, 
  FaCapsules, 
  FaCircleCheck,
  FaStar,
  FaUsers,
  FaClock,
  FaShield,
  FaRobot,
  FaArrowRight
} from 'react-icons/fa6';
import '../styles/Hero.css';

const Hero = ({ scrollToScanner }) => {
  const stats = [
    { value: '98%', label: 'OCR Accuracy', icon: FaStar },
    { value: '2.4s', label: 'Avg. Scan Speed', icon: FaClock },
    { value: '24/7', label: 'AI Analysis', icon: FaShield },
    { value: '50K+', label: 'Medicines Scanned', icon: FaUsers }
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaRobot />
            <span>AI-Powered Healthcare</span>
            <span className="beta-badge">BETA</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>AI-Powered</span><br />
            <span className="text-gradient">Medicine Intelligence</span>
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Scan medicine labels instantly using advanced AI-powered OCR and receive intelligent
            medicine information, safety warnings, and confidence-based insights in seconds.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button 
              className="btn-primary" 
              onClick={scrollToScanner}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMagnifyingGlass />
              Scan Medicine
              <FaArrowRight className="btn-arrow-icon" />
            </motion.button>
            <motion.a 
              href="#features" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                whileHover={{ 
                  y: -8,
                  borderColor: '#00f0ff',
                  boxShadow: '0 20px 40px rgba(0,240,255,0.2)'
                }}
              >
                <stat.icon className="stat-icon" />
                <motion.h2 
                  className="stat-value"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                >
                  {stat.value}
                </motion.h2>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-visual">
        <motion.div
          initial={{ opacity: 0, x: 30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="float-card float-card-top"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="float-card-icon">
            <FaCapsules />
          </div>
          <div>
            <div className="float-card-label">Detected</div>
            <div className="float-card-value">Dolo 650</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="float-card float-card-bottom"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="float-card-icon verified">
            <FaCircleCheck />
          </div>
          <div>
            <div className="float-card-label">Status</div>
            <div className="float-card-value verified-text">Verified</div>
          </div>
        </motion.div>

        <motion.div 
          className="scanner-circle"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="scanner-ring" />
          <motion.img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop"
            alt="Medicine Strip"
            className="scanner-image"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <div className="scanner-line" />
          <div className="pulse-ring pulse-ring-1" />
          <div className="pulse-ring pulse-ring-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;